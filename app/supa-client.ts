import { createClient } from "@supabase/supabase-js";
import type { MergeDeep, SetNonNullable, SetFieldType } from "type-fest";
import { type Database as SupabaseDatabase } from "database.types";

type Database = MergeDeep<
  SupabaseDatabase,
  {
    public: {
      Views: {
        community_post_list_view: {
          Row: SetFieldType<
            SetNonNullable<
              SupabaseDatabase["public"]["Views"]["community_post_list_view"]["Row"]
            >,
            "author_avatar",
            string | null
          >;
        };
      };
    };
  }
>;

const client = createClient<Database>(
  "https://gvmuxylyerpayplncrrm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2bXV4eWx5ZXJwYXlwbG5jcnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NTY4NTgsImV4cCI6MjA2NzUzMjg1OH0.g8RBoWheRQRiRzEkrKZ-qr5TeKzumVP_OPPpQ2gQpXA"
);

export default client;
