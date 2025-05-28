import { supabase } from "@/lib/supabase"

interface SignupData {
  email: string
  password: string
  fullName: string
  displayName: string
  country: string
  dob: string
  sport: string
  role: string
}

interface LoginData {
  email: string
  password: string
}

interface LoginResult {
  success: boolean
  user?: any
  error?: string
}

export class AuthService {
  static async signup(data: SignupData): Promise<{ success: boolean; error?: string; details?: string }> {
    try {
      console.log("Starting signup process for email:", data.email)

      // Use the server-side API endpoint for registration
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        console.error("Registration API error:", result)
        return {
          success: false,
          error: result.error || "Registration failed",
          details: result.details || "",
        }
      }

      console.log("Signup successful for email:", data.email)
      return { success: true }
    } catch (error: any) {
      console.error("Signup error:", error)
      return {
        success: false,
        error: error.message || "An error occurred during signup",
      }
    }
  }

  static async login(data: LoginData): Promise<{ success: boolean; error?: string; user?: any }> {
    try {
      console.log("Starting login process for email:", data.email)

      if (!supabase) {
        console.error("Supabase client is not initialized")
        throw new Error("Authentication service is not available")
      }

      // Increase timeout from 10 seconds to 30 seconds
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Login request timed out after 30 seconds")), 30000)
      })

      // Add retry logic for login attempts
      let attempts = 0
      const maxAttempts = 3
      let lastError: any = null

      while (attempts < maxAttempts) {
        attempts++
        try {
          // Race the login request against the timeout
          const loginPromise = supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
          })

          // @ts-ignore - TypeScript doesn't like racing promises with different return types
          const result = await Promise.race([loginPromise, timeoutPromise])
          const { data: authData, error } = result

          if (error) {
            console.error(`Login attempt ${attempts} failed:`, error)
            lastError = error

            // If this isn't the last attempt, wait before retrying
            if (attempts < maxAttempts) {
              await new Promise((resolve) => setTimeout(resolve, 1000 * attempts))
              continue
            }

            return {
              success: false,
              error: error.message,
            }
          }

          // Check if the user has a profile
          const { data: profileData, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", authData.user.id)
            .single()

          if (profileError || !profileData) {
            console.error("Profile check failed:", profileError || "No profile found")

            // Sign out the user since they don't have a profile
            await supabase.auth.signOut()

            return {
              success: false,
              error: "Your account is incomplete. Please contact support.",
            }
          }

          console.log("Login successful for email:", data.email)
          return {
            success: true,
            user: {
              ...authData.user,
              role: profileData.role,
            },
          }
        } catch (error: any) {
          console.error(`Login attempt ${attempts} error:`, error)
          lastError = error

          // If this isn't the last attempt, wait before retrying
          if (attempts < maxAttempts) {
            await new Promise((resolve) => setTimeout(resolve, 1000 * attempts))
            continue
          }
        }
      }

      // If we've exhausted all attempts
      console.error("All login attempts failed")
      return {
        success: false,
        error: lastError?.message || "Login failed after multiple attempts",
      }
    } catch (error: any) {
      console.error("Login error:", error)
      return {
        success: false,
        error: error.message || "An error occurred during login",
      }
    }
  }

  static async logout(): Promise<{ success: boolean; error?: string }> {
    try {
      console.log("Starting logout process")

      if (!supabase) {
        console.error("Supabase client is not initialized")
        throw new Error("Authentication service is not available")
      }

      const { error } = await supabase.auth.signOut()

      if (error) {
        console.error("Logout error:", error)
        return {
          success: false,
          error: error.message,
        }
      }

      console.log("Logout successful")
      return { success: true }
    } catch (error: any) {
      console.error("Logout error:", error)
      return {
        success: false,
        error: error.message || "An error occurred during logout",
      }
    }
  }

  // Helper method to check if Supabase is available
  static isAvailable(): boolean {
    return !!supabase
  }
}
