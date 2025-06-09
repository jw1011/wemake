import type { Route } from "common/pages/+types";
import { ChevronUpIcon, DotIcon, SlashIcon } from "lucide-react";
import { Form, Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/common/components/ui/breadcrumb";
import { Button } from "~/common/components/ui/button";
import { Textarea } from "~/common/components/ui/textarea";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Join | wemake" },
    { name: "description", content: "회원가입 페이지" },
  ];
};

export default function PostPage() {
  return (
    <div className="grid grid-cols-6 gap-40 items-start">
      <div className="col-span-4 space-y-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/community">Community</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/community?topic=productivity">Productivity</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/community/postId">
                  What is the best productivity tool?
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex w-full items-start gap-10">
          <Button variant="outline" className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>10</span>
          </Button>
          <div className="space-y-20">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">
                What is the best productivity tool?
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>@nico</span>
                <DotIcon className="size-5" />
                <span>12 hours ago</span>
                <DotIcon className="size-5" />
                <span>10 replies</span>
              </div>
              <p className="text-muted-foreground w-3/4">
                Hello, I'm looking for a productivity tool that can help me
                manage my tasks and projects. Any recommendations? I have tried
                Notion, but it's not what I'm looking for. I dream of a tool
                that can help me manage my tasks and projects. Any
                recommendations?
              </p>
            </div>
            <Form className="flex items-start gap-5 w-3/4">
              <Avatar className="size-14">
                <AvatarFallback>N</AvatarFallback>
                <AvatarImage src="https://github.com/jw1011.png" />
              </Avatar>
              <div className="flex flex-col gap-5 items-end w-full">
                <Textarea
                  placeholder="Write a reply"
                  className="w-full resize-none"
                  rows={5}
                />
                <Button>Reply</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <aside className="col-span-2"></aside>
    </div>
  );
}
