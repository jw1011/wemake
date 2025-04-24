import { StarIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

interface ReviewCardProps {
  username: string;
  handle: string;
  avatarUrl?: string;
  rating: number;
  content: string;
  createdAt: string;
}

export function ReviewCard({
  username,
  handle,
  avatarUrl,
  rating,
  content,
  createdAt,
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Avatar>{avatarUrl && <AvatarImage src={avatarUrl} />}</Avatar>
        <div>
          <h4 className="text-lg font-bold">{username}</h4>
          <p className="text-sm text-muted-foreground">@{handle}</p>
        </div>
      </div>
      <div className="flex text-yellow-400">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="size-4" fill="currentColor" />
        ))}
      </div>
      <p className="text-muted-foreground">{content}</p>
      <span className="text-xs text-muted-foreground">{createdAt}</span>
    </div>
  );
}
