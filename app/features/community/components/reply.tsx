import { Form, Link } from "react-router";
import { DotIcon, MessageCircleIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { useState } from "react";
import { Textarea } from "~/common/components/ui/textarea";

interface ReplyProps {
  username: string;
  avatarUrl: string;
  avatarFallback: string;
  timestamp: string;
  content: string;
  topLevel: boolean;
}

export function Reply({
  username,
  avatarUrl,
  avatarFallback,
  timestamp,
  content,
  topLevel,
}: ReplyProps) {
  const [replying, setReplying] = useState(false);
  const toggleReplying = () => setReplying((prev) => !prev);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-5 w-2/3">
        <Avatar className="size-14">
          <AvatarFallback>{avatarFallback}</AvatarFallback>
          <AvatarImage src={avatarUrl} />
        </Avatar>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-2 items-center">
            <Link to={`/users/@${username}`}>
              <h4 className="font-medium">{username}</h4>
            </Link>
            <DotIcon className="size-5" />
            <span className="text-sm text-muted-foreground">{timestamp}</span>
          </div>
          <p className="text-muted-foreground">{content}</p>
          <Button variant="ghost" className="self-end" onClick={toggleReplying}>
            <MessageCircleIcon className="size-4" /> Reply
          </Button>
        </div>
      </div>
      {replying && (
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
      )}
      {topLevel && (
        <div className="pl-5 w-full">
          <Reply
            username="Juwon"
            avatarUrl="https://github.com/jw1011.png"
            avatarFallback="N"
            timestamp="12 hours ago"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt nobis temporibus necessitatibus unde fugiat dicta laborum quia. Officiis optio nihil voluptas praesentium nostrum quisquam sequi vero adipisci sed saepe!"
            topLevel={false}
          />
        </div>
      )}
    </div>
  );
}
