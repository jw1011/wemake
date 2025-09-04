import client from "~/supa-client";

type TeamRow = {
  team_id: number;
  roles: string;
  product_description: string;
  team_leader: {
    username: string;
    avatar: string | null;
  };
};

export const getTeams = async ({ limit }: { limit: number }) => {
  const { data, error } = await client
    .from("teams")
    .select(
      `
      team_id,
      roles,
      product_description,
      team_leader:profiles!inner(
        username,
        avatar
      )
    `
    )
    .limit(limit)
    .returns<TeamRow[]>(); // ← 여기서 타입 확정

  if (error) throw error;
  return data ?? [];
};
