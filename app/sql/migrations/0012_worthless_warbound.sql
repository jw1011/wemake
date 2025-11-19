ALTER TABLE "products" DROP CONSTRAINT "products_profile_id_profiles_profile_id_fk";
--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_to_profiles" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;

CREATE TABLE "events" (
    "event_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "event_type" "event_type",
    "event_data" jsonb,
    "created_at" timestamp DEFAULT now()
);
