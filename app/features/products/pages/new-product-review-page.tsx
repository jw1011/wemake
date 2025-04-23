import type { Route } from "./+types/new-product-review-page";

export function loader({ params }: Route.LoaderArgs) {
  return {
    productId: params.productId,
  };
}

export function action({ request, params }: Route.ActionArgs) {
  // Handle form submission
  return null;
}

export function meta(): Route.MetaFunction {
  return {
    title: "New Product Review",
  };
}

export default function NewProductReviewPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div>
      <h1>New Product Review</h1>
      <p>Product ID: {loaderData.productId}</p>
      <form method="post">
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
