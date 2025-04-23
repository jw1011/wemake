import type { Route } from "./+types/product-reviews-page";

export function loader({ params }: Route.LoaderArgs) {
  return {
    productId: params.productId,
  };
}

export function meta(): Route.MetaFunction {
  return {
    title: "Product Reviews",
  };
}

export default function ProductReviewsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div>
      <h1>Product Reviews</h1>
      <p>Product ID: {loaderData.productId}</p>
    </div>
  );
}
