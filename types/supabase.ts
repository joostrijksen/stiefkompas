export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      access_requests: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          motivation: string | null
          profession: string | null
          status: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          motivation?: string | null
          profession?: string | null
          status?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          motivation?: string | null
          profession?: string | null
          status?: string
        }
        Relationships: []
      }
      assignments: {
        Row: {
          created_at: string
          estimated_minutes: number | null
          id: string
          instructions_mdx_path: string | null
          is_decisive: boolean
          max_attempts: number
          module_id: string
          title: string
          type: Database["public"]["Enums"]["assignment_type"]
        }
        Insert: {
          created_at?: string
          estimated_minutes?: number | null
          id?: string
          instructions_mdx_path?: string | null
          is_decisive?: boolean
          max_attempts?: number
          module_id: string
          title: string
          type: Database["public"]["Enums"]["assignment_type"]
        }
        Update: {
          created_at?: string
          estimated_minutes?: number | null
          id?: string
          instructions_mdx_path?: string | null
          is_decisive?: boolean
          max_attempts?: number
          module_id?: string
          title?: string
          type?: Database["public"]["Enums"]["assignment_type"]
        }
        Relationships: [
          {
            foreignKeyName: "assignments_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assignments_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "v_module_tree"
            referencedColumns: ["module_id"]
          },
        ]
      }
      block_progress: {
        Row: {
          block_id: string
          completed_at: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          block_id: string
          completed_at?: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          block_id?: string
          completed_at?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "block_progress_block_id_fkey"
            columns: ["block_id"]
            isOneToOne: false
            referencedRelation: "blocks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "block_progress_block_id_fkey"
            columns: ["block_id"]
            isOneToOne: false
            referencedRelation: "v_module_tree"
            referencedColumns: ["block_id"]
          },
        ]
      }
      blocks: {
        Row: {
          assignment_id: string | null
          block_order: number
          chapter_id: string
          created_at: string
          estimated_minutes: number
          id: string
          mdx_path: string | null
          slug: string
          title: string
          type: Database["public"]["Enums"]["block_type"]
          video_json_path: string | null
        }
        Insert: {
          assignment_id?: string | null
          block_order: number
          chapter_id: string
          created_at?: string
          estimated_minutes?: number
          id?: string
          mdx_path?: string | null
          slug: string
          title: string
          type: Database["public"]["Enums"]["block_type"]
          video_json_path?: string | null
        }
        Update: {
          assignment_id?: string | null
          block_order?: number
          chapter_id?: string
          created_at?: string
          estimated_minutes?: number
          id?: string
          mdx_path?: string | null
          slug?: string
          title?: string
          type?: Database["public"]["Enums"]["block_type"]
          video_json_path?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blocks_assignment_id_fkey"
            columns: ["assignment_id"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocks_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocks_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "v_module_tree"
            referencedColumns: ["chapter_id"]
          },
        ]
      }
      chapters: {
        Row: {
          chapter_order: number
          created_at: string
          id: string
          module_id: string
          slug: string
          title: string
        }
        Insert: {
          chapter_order: number
          created_at?: string
          id?: string
          module_id: string
          slug: string
          title: string
        }
        Update: {
          chapter_order?: number
          created_at?: string
          id?: string
          module_id?: string
          slug?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "chapters_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chapters_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "v_module_tree"
            referencedColumns: ["module_id"]
          },
        ]
      }
      cohorts: {
        Row: {
          content_version_id: string
          created_at: string
          id: string
          name: string
          rubric_version: string
        }
        Insert: {
          content_version_id: string
          created_at?: string
          id?: string
          name: string
          rubric_version?: string
        }
        Update: {
          content_version_id?: string
          created_at?: string
          id?: string
          name?: string
          rubric_version?: string
        }
        Relationships: [
          {
            foreignKeyName: "cohorts_content_version_id_fkey"
            columns: ["content_version_id"]
            isOneToOne: false
            referencedRelation: "content_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      content_versions: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          name: string
          released_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          released_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          released_at?: string | null
        }
        Relationships: []
      }
      enrollments: {
        Row: {
          cohort_id: string
          completed_at: string | null
          created_at: string
          id: string
          module_slug: string | null
          started_at: string
          status: Database["public"]["Enums"]["enrollment_status"]
          user_id: string
        }
        Insert: {
          cohort_id: string
          completed_at?: string | null
          created_at?: string
          id?: string
          module_slug?: string | null
          started_at?: string
          status?: Database["public"]["Enums"]["enrollment_status"]
          user_id: string
        }
        Update: {
          cohort_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          module_slug?: string | null
          started_at?: string
          status?: Database["public"]["Enums"]["enrollment_status"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_cohort_id_fkey"
            columns: ["cohort_id"]
            isOneToOne: false
            referencedRelation: "cohorts"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_section_progress: {
        Row: {
          completed: boolean
          completed_at: string
          id: string
          lesson_slug: string
          module_slug: string
          section_id: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          completed_at?: string
          id?: string
          lesson_slug: string
          module_slug: string
          section_id: string
          user_id: string
        }
        Update: {
          completed?: boolean
          completed_at?: string
          id?: string
          lesson_slug?: string
          module_slug?: string
          section_id?: string
          user_id?: string
        }
        Relationships: []
      }
      modules: {
        Row: {
          content_version_id: string
          created_at: string
          estimated_minutes: number | null
          id: string
          module_order: number
          slug: string
          title: string
        }
        Insert: {
          content_version_id: string
          created_at?: string
          estimated_minutes?: number | null
          id?: string
          module_order: number
          slug: string
          title: string
        }
        Update: {
          content_version_id?: string
          created_at?: string
          estimated_minutes?: number | null
          id?: string
          module_order?: number
          slug?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "modules_content_version_id_fkey"
            columns: ["content_version_id"]
            isOneToOne: false
            referencedRelation: "content_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          role: Database["public"]["Enums"]["user_role"]
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      submissions: {
        Row: {
          assignment_id: string
          attempt_no: number
          content: string
          created_at: string
          enrollment_id: string
          id: string
          review_decision: string | null
          status: Database["public"]["Enums"]["assignment_status"]
          submitted_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          assignment_id: string
          attempt_no?: number
          content?: string
          created_at?: string
          enrollment_id: string
          id?: string
          review_decision?: string | null
          status?: Database["public"]["Enums"]["assignment_status"]
          submitted_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          assignment_id?: string
          attempt_no?: number
          content?: string
          created_at?: string
          enrollment_id?: string
          id?: string
          review_decision?: string | null
          status?: Database["public"]["Enums"]["assignment_status"]
          submitted_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "submissions_assignment_id_fkey"
            columns: ["assignment_id"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submissions_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "enrollments"
            referencedColumns: ["id"]
          },
        ]
      }
      time_logs: {
        Row: {
          block_id: string
          created_at: string
          ended_at: string | null
          id: string
          seconds: number | null
          started_at: string
          user_id: string
        }
        Insert: {
          block_id: string
          created_at?: string
          ended_at?: string | null
          id?: string
          seconds?: number | null
          started_at?: string
          user_id: string
        }
        Update: {
          block_id?: string
          created_at?: string
          ended_at?: string | null
          id?: string
          seconds?: number | null
          started_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "time_logs_block_id_fkey"
            columns: ["block_id"]
            isOneToOne: false
            referencedRelation: "blocks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_logs_block_id_fkey"
            columns: ["block_id"]
            isOneToOne: false
            referencedRelation: "v_module_tree"
            referencedColumns: ["block_id"]
          },
        ]
      }
      user_certifications: {
        Row: {
          created_at: string | null
          exam_passed_at: string | null
          exam_started_at: string | null
          id: string
          purchase_ref: string | null
          purchase_source: string | null
          purchased_at: string | null
          score: number | null
          updated_at: string | null
          user_id: string
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          created_at?: string | null
          exam_passed_at?: string | null
          exam_started_at?: string | null
          id?: string
          purchase_ref?: string | null
          purchase_source?: string | null
          purchased_at?: string | null
          score?: number | null
          updated_at?: string | null
          user_id: string
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          created_at?: string | null
          exam_passed_at?: string | null
          exam_started_at?: string | null
          id?: string
          purchase_ref?: string | null
          purchase_source?: string | null
          purchased_at?: string | null
          score?: number | null
          updated_at?: string | null
          user_id?: string
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          created_at: string | null
          id: string
          last_accessed_at: string | null
          lesson_slug: string | null
          module_slug: string
          section_id: string | null
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          lesson_slug?: string | null
          module_slug: string
          section_id?: string | null
          status: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          lesson_slug?: string | null
          module_slug?: string
          section_id?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      v_module_tree: {
        Row: {
          assignment_id: string | null
          block_id: string | null
          block_order: number | null
          block_slug: string | null
          block_title: string | null
          block_type: Database["public"]["Enums"]["block_type"] | null
          chapter_id: string | null
          chapter_order: number | null
          chapter_slug: string | null
          chapter_title: string | null
          estimated_minutes: number | null
          mdx_path: string | null
          module_id: string | null
          module_order: number | null
          module_slug: string | null
          module_title: string | null
          video_json_path: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blocks_assignment_id_fkey"
            columns: ["assignment_id"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      get_enrollment_id_for_module: {
        Args: { _module_id: string }
        Returns: string
      }
      get_or_create_draft: { Args: { _assignment_id: string }; Returns: string }
      is_admin: { Args: never; Returns: boolean }
      is_admin_or_reviewer: { Args: never; Returns: boolean }
      is_enrolled_in_module: { Args: { _module_id: string }; Returns: boolean }
      is_reviewer: { Args: never; Returns: boolean }
      start_next_attempt: { Args: { _assignment_id: string }; Returns: string }
      submit_submission: {
        Args: { _submission_id: string }
        Returns: undefined
      }
    }
    Enums: {
      assignment_status: "draft" | "submitted" | "in_review" | "reviewed"
      assignment_type: "reflection" | "practice" | "core_case" | "cert_exam"
      block_type: "theory" | "video" | "assignment"
      enrollment_status: "active" | "paused" | "cancelled" | "completed"
      user_role: "student" | "admin" | "reviewer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      assignment_status: ["draft", "submitted", "in_review", "reviewed"],
      assignment_type: ["reflection", "practice", "core_case", "cert_exam"],
      block_type: ["theory", "video", "assignment"],
      enrollment_status: ["active", "paused", "cancelled", "completed"],
      user_role: ["student", "admin", "reviewer"],
    },
  },
} as const
