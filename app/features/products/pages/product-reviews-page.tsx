import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/product-reviews-page";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { ReviewCard } from "../components/review-card";

export function meta({}: Route.MetaFunction) {
  return [
    { title: "Product Reviews" },
    { name: "description", content: "Read and write product reviews" },
  ];
}

export default function ProductReviewsPage() {
  return (
    <div className="space-y-10 max-w-screen-md">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold"> 10 Reviews </h2>
        <Button variant={"secondary"}>Write a review</Button>
      </div>
      <div className="space-y-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <ReviewCard
            username="juwon lee"
            handle="username"
            avatarUrl="https://github.com/facebook.png"
            rating={5}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non rem porro fuga enim voluptatum aperiam minus distinctio natus dolorum dicta aliquam sequi cum, repudiandae, dignissimos commodi est sapiente pariatur."
            createdAt="10 days ago"
          />
        ))}
      </div>
    </div>
  );
}
