import type { Route } from "common/pages/+types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Submit Job | WeMake" },
    { name: "description", content: "Submit a new job posting" },
  ];
}

export default function SubmitJobPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Submit a Job</h1>
    </div>
  );
}
