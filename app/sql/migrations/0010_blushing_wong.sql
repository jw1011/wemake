CREATE TYPE "public"."job_types" AS ENUM('full-time', 'part-time', 'freelance', 'internship');--> statement-breakpoint
CREATE TYPE "public"."location" AS ENUM('remote', 'in-person', 'hybrid');--> statement-breakpoint
CREATE TABLE "teams" (
	"team_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "teams_team_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"product_name" text NOT NULL,
	"team_size" integer NOT NULL,
	"equity_split" integer NOT NULL,
	"product_stage" "product_stage" NOT NULL,
	"roles" text NOT NULL,
	"product_description" text NOT NULL,
	"team_leader_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "team_size_check" CHECK ("teams"."team_size" BETWEEN 1 AND 100),
	CONSTRAINT "equity_split_check" CHECK ("teams"."equity_split" BETWEEN 1 AND 100),
	CONSTRAINT "product_description_check" CHECK (LENGTH("teams"."product_description") <= 200)
);
--> statement-breakpoint
ALTER TABLE "team" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "team" CASCADE;--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "location" SET DATA TYPE "public"."location" USING "location"::text::"public"."location";--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "job_type" "job_types" NOT NULL;--> statement-breakpoint
ALTER TABLE "teams" ADD CONSTRAINT "teams_team_leader_id_profiles_profile_id_fk" FOREIGN KEY ("team_leader_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "job_types";--> statement-breakpoint
DROP TYPE "public"."job_type";--> statement-breakpoint
DROP TYPE "public"."locations";
