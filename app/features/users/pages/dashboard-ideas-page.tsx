import type { Route } from "./+types/dashboard-ideas-page";

export function loader({ request }: Route.LoaderArgs) {
  return {
    // 사용자의 아이디어 목록 로드
  };
}

export function action({ request }: Route.ActionArgs) {
  return {
    // 아이디어 관련 액션 처리
  };
}

export function meta({ data }: Route.MetaFunction) {
  return [
    { title: "내 아이디어 | WeMake" },
    { name: "description", content: "내가 작성한 아이디어 목록" },
  ];
}

export default function DashboardIdeasPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">내 아이디어</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">아이디어 목록</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            새 아이디어 작성
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">아직 작성한 아이디어가 없습니다.</p>
        </div>
      </div>
    </div>
  );
}
