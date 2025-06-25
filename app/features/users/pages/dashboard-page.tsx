import type { Route } from "./+types/dashboard-page";

export function loader({ request }: Route.LoaderArgs) {
  return {
    // 대시보드 데이터 로드
  };
}

export function action({ request }: Route.ActionArgs) {
  return {
    // 대시보드 액션 처리
  };
}

export function meta({ data }: Route.MetaFunction) {
  return [
    { title: "대시보드 | WeMake" },
    { name: "description", content: "내 대시보드" },
  ];
}

export default function DashboardPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">내 아이디어</h2>
          <p className="text-gray-600">아이디어 관리</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">내 제품</h2>
          <p className="text-gray-600">제품 관리</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">활동</h2>
          <p className="text-gray-600">최근 활동</p>
        </div>
      </div>
    </div>
  );
}
