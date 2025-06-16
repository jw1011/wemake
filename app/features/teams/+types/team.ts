export interface Team {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  members: TeamMember[];
}

export interface TeamMember {
  id: string;
  userId: string;
  teamId: string;
  role: TeamRole;
  joinedAt: string;
}

export type TeamRole = "OWNER" | "ADMIN" | "MEMBER";

export interface CreateTeamInput {
  name: string;
  description: string;
}
