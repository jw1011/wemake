import type { Route } from "./+types/message-page";

export function loader({ request, params }: Route.LoaderArgs) {
  const { messageId } = params;
  return {
    messageId,
    // 메시지 상세 정보 로드
  };
}

export function action({ request }: Route.ActionArgs) {
  return {
    // 메시지 관련 액션 처리
  };
}

export function meta({ data }: Route.MetaFunction) {
  return [
    { title: `메시지 상세 | WeMake` },
    { name: "description", content: "메시지 상세 정보" },
  ];
}

export default function MessagePage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { messageId } = loaderData;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">메시지 상세</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-2">메시지 ID: {messageId}</h2>
        <p className="text-gray-600">메시지 상세 내용이 여기에 표시됩니다.</p>
      </div>
    </div>
  );
}
