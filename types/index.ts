export type UserRole = "user" | "coach" | "admin"

export interface Profile {
  id: string
  username: string | null
  full_name: string | null
  display_name: string | null
  avatar_url: string | null
  country: string | null
  date_of_birth: string | null
  preferred_sport: string | null
  role: UserRole
  shooter_id: string | null
  created_at: string
  updated_at: string
}
