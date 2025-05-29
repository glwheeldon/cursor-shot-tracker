export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          full_name: string | null;
          display_name: string | null;
          shooter_id: string | null;
          country: string | null;
          date_of_birth: string | null;
          avatar_url: string | null;
          preferred_sport: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          username?: string | null;
          full_name?: string | null;
          display_name?: string | null;
          shooter_id?: string | null;
          country?: string | null;
          date_of_birth?: string | null;
          avatar_url?: string | null;
          preferred_sport?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          username?: string | null;
          full_name?: string | null;
          display_name?: string | null;
          shooter_id?: string | null;
          country?: string | null;
          date_of_birth?: string | null;
          avatar_url?: string | null;
          preferred_sport?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      sessions: {
        Row: {
          id: string;
          user_id: string;
          sport: string;
          title: string | null;
          location: string | null;
          notes: string | null;
          status: "active" | "completed" | "cancelled" | null;
          start_time: string | null;
          end_time: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          sport: string;
          title?: string | null;
          location?: string | null;
          notes?: string | null;
          status?: "active" | "completed" | "cancelled" | null;
          start_time?: string | null;
          end_time?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          sport?: string;
          title?: string | null;
          location?: string | null;
          notes?: string | null;
          status?: "active" | "completed" | "cancelled" | null;
          start_time?: string | null;
          end_time?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "sessions_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      shots: {
        Row: {
          id: string;
          session_id: string;
          user_id: string;
          is_made: boolean;
          shot_type: string | null;
          distance: number | null;
          position_x: number | null;
          position_y: number | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          session_id: string;
          user_id: string;
          is_made: boolean;
          shot_type?: string | null;
          distance?: number | null;
          position_x?: number | null;
          position_y?: number | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          session_id?: string;
          user_id?: string;
          is_made?: boolean;
          shot_type?: string | null;
          distance?: number | null;
          position_x?: number | null;
          position_y?: number | null;
          created_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "shots_session_id_fkey";
            columns: ["session_id"];
            referencedRelation: "sessions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "shots_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
