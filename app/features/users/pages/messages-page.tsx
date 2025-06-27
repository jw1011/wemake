import type { Route } from "./+types/messages-page";

export function meta() {
  return [
    { title: "메시지 | WeMake" },
    { name: "description", content: "내 메시지 목록" },
  ];
}

export default function MessagesPage() {
  return <div className="container mx-auto px-4 py-8">aa</div>;
}
