-- ===============================
-- 안전한 단일 SQL 마이그레이션
-- 기존 데이터는 모두 삭제됩니다.
-- ===============================

-- 1. Drizzle 마이그레이션 기록 삭제
DROP TABLE IF EXISTS __drizzle_migrations CASCADE;

-- 2. 기존 teams 테이블 및 시퀀스 삭제
DROP TABLE IF EXISTS teams CASCADE;
DROP SEQUENCE IF EXISTS teams_team_id_seq CASCADE;

-- 3. 시퀀스 새로 생성
CREATE SEQUENCE teams_team_id_seq
    START WITH 1
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

-- 4. teams 테이블 새로 생성
CREATE TABLE teams (
    team_id bigint PRIMARY KEY DEFAULT nextval('teams_team_id_seq'),
    product_name text NOT NULL,
    team_size integer NOT NULL CHECK (team_size BETWEEN 1 AND 100),
    equity_split integer NOT NULL CHECK (equity_split BETWEEN 1 AND 100),
    product_stage product_stage NOT NULL,
    roles text NOT NULL,
    product_description text NOT NULL CHECK (LENGTH(product_description) <= 200),
    team_leader_id uuid NOT NULL,
    created_at timestamp DEFAULT now() NOT NULL,
    updated_at timestamp DEFAULT now() NOT NULL
);

-- 5. 외래키 추가
ALTER TABLE teams
    ADD CONSTRAINT teams_team_leader_id_profiles_profile_id_fk
    FOREIGN KEY (team_leader_id)
    REFERENCES public.profiles(profile_id)
    ON DELETE CASCADE;
