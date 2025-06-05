import { useParams } from "react-router";
import { Button } from "~/common/components/ui/button";

export default function SocialCompletePage() {
  const { provider } = useParams();

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">소셜 로그인 완료</h1>
        <p className="text-gray-500">{provider} 계정으로 로그인되었습니다</p>
      </div>
      <div className="space-y-4">
        <Button className="w-full" asChild>
          <a href="/">홈으로 이동</a>
        </Button>
      </div>
    </div>
  );
}
