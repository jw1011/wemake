-- 1. ENUM 타입 생성
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'event_type') THEN
        CREATE TYPE event_type AS ENUM ('click', 'view', 'purchase');
    END IF;
END$$;

-- 2. events 테이블 생성
CREATE TABLE IF NOT EXISTS events (
    event_id uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    event_type event_type NOT NULL,
    event_data jsonb,
    created_at timestamp DEFAULT now()
);

-- 3. track_event 함수 생성 (덮어쓰기)
CREATE OR REPLACE FUNCTION track_event(
    event_type event_type,
    event_data jsonb
) RETURNS void AS $$
BEGIN
    INSERT INTO events (event_type, event_data) VALUES (event_type, event_data);
END;
$$ LANGUAGE plpgsql;
