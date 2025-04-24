import type { Route } from "./+types/product-overview-page";

export function loader({ params }: Route.LoaderArgs) {
  return {
    productId: params.productId,
  };
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Product Overview | wemake" },
    { name: "description", content: "Submit your product" },
  ];
};

export default function ProductOverviewPage({
  params: { productId },
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <h3 className="text-lg font-bold">What is this product</h3>
        <p className="text-muted-foreground">Lorem ipsum</p>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">How does it work?</h3>
        <p className="text-muted-foreground">Lorem ipsum</p>
      </div>
    </div>
  );
}
