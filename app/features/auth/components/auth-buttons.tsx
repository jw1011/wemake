import { Github, GithubIcon, LockIcon, MessageCircleIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Separator } from "~/common/components/ui/separator";

export default function AuthButtons() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <Separator className="w-full"></Separator>
        <span className="text-xs text-muted-foreground uppercase font-medium">
          Or continue with
        </span>
        <Separator className="w-full"></Separator>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/social/kakao/start">
            <MessageCircleIcon className="w-4 h-4"></MessageCircleIcon>
            <span>KakaoTalk으로 로그인하기</span>
          </Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/social/github/start">
            <GithubIcon className="w-4 h-4"></GithubIcon>
            <span>Github으로 로그인하기</span>
          </Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/otp/start">
            <LockIcon className="w-4 h-4"></LockIcon>
            <span>OTP 로그인하기</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
