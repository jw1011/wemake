import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/product-reviews-page";
import { ReviewCard } from "../components/review-card";
import { Dialog, DialogTrigger } from "~/common/components/ui/dialog";
import CreateReviewDialog from "../components/create-review-dialog";

export function meta({}: Route.MetaFunction) {
  return [
    { title: "Product Reviews" },
    { name: "description", content: "Read and write product reviews" },
  ];
}

export default function ProductReviewsPage() {
  return (
    <Dialog>
      <div className="space-y-10 max-w-screen-md">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold"> 10 Reviews </h2>
          <DialogTrigger>
            <Button variant={"secondary"}>Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <ReviewCard
              username="juwon lee"
              handle="username"
              avatarUrl="https://github.com/facebook.png"
              rating={5}
              content="Lorem ipsum "
              createdAt="10 days ago"
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}
