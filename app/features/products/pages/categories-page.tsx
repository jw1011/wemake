import type { Route } from "./+types/categories-page";
import { Hero } from "~/common/components/hero";
import { CategoryCard } from "../components/category-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Search Products | ProductHunt Clone" },
    { name: "description", content: "Search for products" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="space-y-10">
      <Hero title="Categories" subtitle="Browse products by category"></Hero>
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            id="categoryId"
            name="Category Name"
            description="Category Description"
          />
        ))}
      </div>
    </div>
  );
}
