"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "expo-router"
import type { Session, User } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"

// Minimal Profile type for now
export type Profile = { id: string; email?: string; [key: string]: any }

interface SignupUserData {
  fullName: string
  displayName: string
  country: string
  dob: string
  sport: string
  role: string
}

type AuthContextType = {
  user: User | null
  profile: Profile | null
  session: Session | null
  isLoading: boolean
  signUp: (email: string, password: string, userData: SignupUserData) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (profile: Partial<Profile>) => Promise<void>
  refreshSession: () => Promise<boolean>
  authError: Error | null
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  session: null,
  isLoading: true,
  signUp: async () => {},
  signIn: async () => {},
  signOut: async () => {},
  updateProfile: async () => {},
  refreshSession: async () => false,
  authError: null,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState<Error | null>(null)
  const router = useRouter()

  // On mount, check for existing session
  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true)
      try {
        const { data, error } = await supabase.auth.getSession()
        if (error) throw error
        if (data.session) {
          setSession(data.session)
          setUser(data.session.user)
        } else {
          setSession(null)
          setUser(null)
        }
      } catch (error) {
        setAuthError(error instanceof Error ? error : new Error(String(error)))
        setSession(null)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }
    checkSession()
  }, [])

  const signUp = async (email: string, password: string, userData: SignupUserData) => {
    setIsLoading(true)
    setAuthError(null)
    try {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      // Optionally, update profile here with userData
      // After sign up, sign in the user
      await signIn(email, password)
      router.push('/(tabs)')
    } catch (error) {
      setAuthError(error instanceof Error ? error : new Error(String(error)))
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    setAuthError(null)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      setSession(data.session)
      setUser(data.session?.user ?? null)
      router.push('/(tabs)')
    } catch (error) {
      setAuthError(error instanceof Error ? error : new Error(String(error)))
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    setIsLoading(true)
    setAuthError(null)
    try {
      await supabase.auth.signOut()
      setSession(null)
      setUser(null)
      setProfile(null)
      router.push('/login')
    } catch (error) {
      setAuthError(error instanceof Error ? error : new Error(String(error)))
    } finally {
      setIsLoading(false)
    }
  }

  const updateProfile = async (updatedProfile: Partial<Profile>) => {
    if (!user) return
    setIsLoading(true)
    setAuthError(null)
    try {
      const { error } = await supabase.from('profiles').update(updatedProfile).eq('id', user.id)
      if (error) throw error
      setProfile((prev) => ({ ...prev, ...updatedProfile } as Profile))
    } catch (error) {
      setAuthError(error instanceof Error ? error : new Error(String(error)))
    } finally {
      setIsLoading(false)
    }
  }

  const refreshSession = async (): Promise<boolean> => {
    setIsLoading(true)
    setAuthError(null)
    try {
      const { data, error } = await supabase.auth.getSession()
      if (error) throw error
      setSession(data.session)
      setUser(data.session?.user ?? null)
      return !!data.session
    } catch (error) {
      setAuthError(error instanceof Error ? error : new Error(String(error)))
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        session,
        isLoading,
        signUp,
        signIn,
        signOut,
        updateProfile,
        refreshSession,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
