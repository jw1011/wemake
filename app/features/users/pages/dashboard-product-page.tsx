import type { Route } from "./+types/dashboard-product-page";

export function loader({ request, params }: Route.LoaderArgs) {
  const { productId } = params;
  return {
    productId,
    // 특정 제품의 상세 정보 로드
  };
}

export function action({ request }: Route.ActionArgs) {
  return {
    // 제품 관련 액션 처리
  };
}

export function meta({ data }: Route.MetaFunction) {
  return [
    { title: "제품 관리 | WeMake" },
    { name: "description", content: "내 제품 관리" },
  ];
}

export default function DashboardProductPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { productId } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">제품 관리</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">제품 ID: {productId}</h2>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            제품 수정
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">제품 상세 정보가 여기에 표시됩니다.</p>
        </div>
      </div>
    </div>
  );
}
