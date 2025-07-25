import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/teams-page";
import { TeamCard } from "../components/team-card";

export function meta() {
  return [
    { title: "Teams | wemake" },
    { name: "description", content: "Team page description" },
  ];
}

export default function TeamsPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Teams"
        subtitle="Find a team looking for a new member."
      ></Hero>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <TeamCard
            key={`teamId-${index}`}
            id={`teamId-${index}`}
            leaderUsername="juwon"
            leaderAvatarUrl="https://github.com/jw1011.png"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
