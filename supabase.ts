export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      _ProductToReview: {
        Row: {
          A: string
          B: string
        }
        Insert: {
          A: string
          B: string
        }
        Update: {
          A?: string
          B?: string
        }
        Relationships: [
          {
            foreignKeyName: "_ProductToReview_A_fkey"
            columns: ["A"]
            isOneToOne: false
            referencedRelation: "Product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_ProductToReview_B_fkey"
            columns: ["B"]
            isOneToOne: false
            referencedRelation: "Review"
            referencedColumns: ["id"]
          },
        ]
      }
      cart: {
        Row: {
          id: string
          userId: string
        }
        Insert: {
          id: string
          userId: string
        }
        Update: {
          id?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "cart_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Contact: {
        Row: {
          email: string
          id: string
          message: string
          name: string
          phoneNumber: string
        }
        Insert: {
          email: string
          id: string
          message: string
          name: string
          phoneNumber: string
        }
        Update: {
          email?: string
          id?: string
          message?: string
          name?: string
          phoneNumber?: string
        }
        Relationships: []
      }
      Product: {
        Row: {
          avgReview: number
          category: string
          currentStock: number
          description: string
          id: string
          images: string[] | null
          name: string
          price: number
          sizes: string
          tags: string[] | null
          totalNoOfReviews: number
        }
        Insert: {
          avgReview: number
          category: string
          currentStock: number
          description: string
          id: string
          images?: string[] | null
          name: string
          price: number
          sizes: string
          tags?: string[] | null
          totalNoOfReviews: number
        }
        Update: {
          avgReview?: number
          category?: string
          currentStock?: number
          description?: string
          id?: string
          images?: string[] | null
          name?: string
          price?: number
          sizes?: string
          tags?: string[] | null
          totalNoOfReviews?: number
        }
        Relationships: []
      }
      Review: {
        Row: {
          comment: string
          id: string
          reviewerid: string
          stars: string
        }
        Insert: {
          comment: string
          id: string
          reviewerid: string
          stars: string
        }
        Update: {
          comment?: string
          id?: string
          reviewerid?: string
          stars?: string
        }
        Relationships: [
          {
            foreignKeyName: "Review_reviewerid_fkey"
            columns: ["reviewerid"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      User: {
        Row: {
          email: string
          id: string
          isAdmin: boolean
          name: string
          password: string
        }
        Insert: {
          email: string
          id: string
          isAdmin?: boolean
          name: string
          password: string
        }
        Update: {
          email?: string
          id?: string
          isAdmin?: boolean
          name?: string
          password?: string
        }
        Relationships: []
      }
      wishlist: {
        Row: {
          id: string
          userId: string
        }
        Insert: {
          id: string
          userId: string
        }
        Update: {
          id?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "wishlist_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
