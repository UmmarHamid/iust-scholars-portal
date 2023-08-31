export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          credits: number | null
          id: string
          name: string | null
        }
        Insert: {
          credits?: number | null
          id?: string
          name?: string | null
        }
        Update: {
          credits?: number | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      scholars_profiles: {
        Row: {
          address: string | null
          department: string | null
          dob: string | null
          father: string | null
          id: string
          join_date: string | null
          mother: string | null
          phone: number | null
          qualified_exam: string | null
          reg_no: string | null
          registered_courses: string | null
          user_role: string | null
          username: string | null
        }
        Insert: {
          address?: string | null
          department?: string | null
          dob?: string | null
          father?: string | null
          id?: string
          join_date?: string | null
          mother?: string | null
          phone?: number | null
          qualified_exam?: string | null
          reg_no?: string | null
          registered_courses?: string | null
          user_role?: string | null
          username?: string | null
        }
        Update: {
          address?: string | null
          department?: string | null
          dob?: string | null
          father?: string | null
          id?: string
          join_date?: string | null
          mother?: string | null
          phone?: number | null
          qualified_exam?: string | null
          reg_no?: string | null
          registered_courses?: string | null
          user_role?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scholars_profiles_registered_courses_fkey"
            columns: ["registered_courses"]
            referencedRelation: "courses"
            referencedColumns: ["id"]
          }
        ]
      }
      srac_profiles: {
        Row: {
          designation: string | null
          email: string | null
          id: string
          name: string | null
        }
        Insert: {
          designation?: string | null
          email?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          designation?: string | null
          email?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      supervisor_profiles: {
        Row: {
          assigned_scholars: string | null
          designation: string | null
          expertise: string[] | null
          id: string
          name: string | null
        }
        Insert: {
          assigned_scholars?: string | null
          designation?: string | null
          expertise?: string[] | null
          id?: string
          name?: string | null
        }
        Update: {
          assigned_scholars?: string | null
          designation?: string | null
          expertise?: string[] | null
          id?: string
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "supervisor_profiles_assigned_scholars_fkey"
            columns: ["assigned_scholars"]
            referencedRelation: "scholars_profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
