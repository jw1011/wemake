-- 0010_create_events_table.sql
CREATE TYPE IF NOT EXISTS event_type AS ENUM ('click', 'view', 'purchase');

CREATE TABLE IF NOT EXISTS events (
    event_id uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    event_type event_type NOT NULL,
    event_data jsonb,
    created_at timestamp DEFAULT now()
);
