import type { Route } from "./+types/messages-page";

export function meta() {
  return [
    { title: "Messages | WeMake" },
    { name: "description", content: "내 메시지 목록" },
  ];
}

export default function MessagesPage() {
  return (
    <div className="space-y-20">
      <h1 className="text-4xl font-bold">Messages</h1>
    </div>
  );
}
