import type { Route } from "./+types/category-page";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
import { getCategory, getProductsByCategory } from "../queries";
import { z } from "zod";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Developer Tools | wemake" },
    { name: "description", content: "Search for products" },
  ];
};

const paramSchema = z.object({
  category: z.coerce.number(),
});

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { data, success } = paramSchema.safeParse(params);
  if (!success) {
    throw new Response("Invalid category", { status: 400 });
  }
  const category = await getCategory(data.category);
  const products = await getProductsByCategory({
    categoryId: data.category,
  }); ///여기서 부터 수정!!
  return { category };
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
