import { Hero } from "~/common/components/hero";

export function meta({}) {
  return [
    { title: `IdeasGPT | WeMake` },
    { name: "description", content: "Find ideas for your next project" },
  ];
}

export default function IdeasPage() {
  return (
    <div className="container py-8">
      <Hero title="aa"></Hero>
    </div>
  );
}
