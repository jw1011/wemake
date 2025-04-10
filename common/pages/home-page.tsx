import type * as Router from "@react-router/dev";
import type { Route } from "./+types";

export const loader = ({ request }: Route.LoaderArgs) => {
  console.log("Home page loader called with request:", request.url);
  // 여기에 데이터 로딩 로직을 추가하세요.
  return { message: "Home page loader에서 데이터 로드 완료!" };
};

export const action = async ({ request }: Route.ActionArgs) => {
  console.log("Home page action called with request:", request.url);
  const formData = await request.formData();
  // 여기에 폼 데이터 처리 로직을 추가하세요.
  console.log("Form Data:", Object.fromEntries(formData));
  return { success: true, received: Object.fromEntries(formData) };
};

export const meta: Route.MetaFunction = (matches) => {
  // `matches` 파라미터는 라우트 매칭 정보를 담고 있습니다.
  // 실제 MetaFunction 타입 정의에 따라 반환 타입을 조정해야 할 수 있습니다.
  console.log("Home page meta function called with matches:", matches);
  return [
    { title: "Home Page" },
    { name: "description", content: "Welcome to the home page" },
  ];
};

export default function HomePage({
  loaderData,
  actionData,
}: Router.ComponentProps) {
  console.log("HomePage rendered with loaderData:", loaderData);
  console.log("HomePage rendered with actionData:", actionData);

  // loaderData와 actionData에 대한 타입 단언 (선택 사항이지만 권장)
  // Awaited<T>는 Promise가 resolve된 타입을 추출합니다.
  // ReturnType<T>는 함수의 반환 타입을 추출합니다.
  const typedLoaderData = loaderData as Awaited<ReturnType<typeof loader>>;
  const typedActionData = actionData as Awaited<ReturnType<typeof action>>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-2">{typedLoaderData?.message || "로딩 중..."}</p>

      {typedActionData && (
        <div className="mt-4 p-2 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold">Action 결과:</h2>
          <pre className="text-sm">
            {JSON.stringify(typedActionData, null, 2)}
          </pre>
        </div>
      )}

      <form method="post" className="mt-4 space-y-2">
        <input type="hidden" name="intent" value="sampleAction" />
        <div>
          <label
            htmlFor="nameInput"
            className="block text-sm font-medium text-gray-700"
          >
            이름:
          </label>
          <input
            type="text"
            id="nameInput"
            name="name"
            defaultValue="테스트 사용자"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Action 실행
        </button>
      </form>
    </div>
  );
}
