import { Outlet, NavLink } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button, buttonVariants } from "~/common/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "~/common/components/ui/dialog";
import { Textarea } from "~/common/components/ui/textarea";
import { cn } from "~/lib/utils";
import type { Route } from "./+types/profile-layout";
import { getUserProfile } from "../queries";

export const loader = async ({
  params,
}: Route.LoaderArgs & { params: { username: string } }) => {
  const user = await getUserProfile(params.username);
  if (!user) {
    throw new Response("User not found", { status: 404 });
  }
  return { user };
};

export default function ProfileLayout({ loaderData }: Route.ComponentProps) {
  const { user } = loaderData;

  return (
    <div className="space-y-10">
      {/* 프로필 상단 */}
      <div className="flex items-center gap-4">
        <Avatar className="size-40">
          {user.avatar ? (
            <AvatarImage src={user.avatar} />
          ) : (
            <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
          )}
        </Avatar>
        <div className="space-y-5">
          <div className="flex gap-2">
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <Button variant="outline" asChild>
              <NavLink to="/my/settings">Edit profile</NavLink>
            </Button>
            <Button variant="secondary">Follow</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Message</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Message</DialogTitle>
                </DialogHeader>
                <DialogDescription className="space-y-4">
                  <span className="text-sm text-muted-foreground">
                    Send a message to {user.name}
                  </span>
                  <form className="space-y-4">
                    <Textarea
                      placeholder="Message"
                      className="resize-none"
                      rows={4}
                    />
                    <Button type="submit">Send</Button>
                  </form>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-sm text-muted-foreground">
              @{user.username}
            </span>
            <Badge variant="secondary">{user.role}</Badge>
            <Badge variant="secondary">100 followers</Badge>
            <Badge variant="secondary">100 following</Badge>
          </div>
        </div>
      </div>

      {/* 메뉴 네비게이션 */}
      <div className="flex gap-5">
        {[
          { label: "About", to: `/users/${user.username}` },
          { label: "Products", to: `/users/${user.username}/products` },
          { label: "Posts", to: `/users/${user.username}/posts` },
        ].map((item) => (
          <NavLink
            end
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: "outline" }),
                isActive && "bg-accent text-foreground"
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* 서브 페이지 렌더 */}
      <div className="max-w-screen-md">
        <Outlet context={{ headline: user.headline, bio: user.bio }} />
      </div>
    </div>
  );
}
