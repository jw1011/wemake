import type { Route } from "common/pages/+types";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Join | wemake" },
    { name: "description", content: "회원가입 페이지" },
  ];
};

export default function SubmitPostPage() {
  return <div className="container py-8"></div>;
}
