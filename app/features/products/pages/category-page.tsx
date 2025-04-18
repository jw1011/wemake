import type { Route } from "./+types/category-page";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Developer Tools | wemake" },
    { name: "description", content: "Search for products" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="space-y-10">
      <Hero
        title="Developer Tools"
        subtitle="Tools for developers to build products faster"
      ></Hero>

      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={`productId-${index}`}
            id={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}
