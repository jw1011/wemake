import type { Route } from "./+types/messages-page";

export function loader({ request }: Route.LoaderArgs) {
  return {
    // 사용자의 메시지 목록 로드
  };
}

export function action({ request }: Route.ActionArgs) {
  return {
    // 메시지 관련 액션 처리
  };
}

export function meta({ data }: Route.MetaFunction) {
  return [
    { title: "메시지 | WeMake" },
    { name: "description", content: "내 메시지 목록" },
  ];
}

export default function MessagesPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">메시지</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">메시지 목록</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <h3 className="font-medium">새로운 알림</h3>
                <p className="text-sm text-gray-600">
                  새로운 제품이 등록되었습니다.
                </p>
              </div>
              <span className="text-xs text-gray-500">2시간 전</span>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <h3 className="font-medium">시스템 메시지</h3>
                <p className="text-sm text-gray-600">
                  계정이 성공적으로 생성되었습니다.
                </p>
              </div>
              <span className="text-xs text-gray-500">1일 전</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
