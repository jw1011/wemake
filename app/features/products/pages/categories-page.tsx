import type { Route } from "./+types/categories-page";
import { Hero } from "~/common/components/hero";
import { CategoryCard } from "../components/category-card";
import { getCategories } from "../queries";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Search Products | ProductHunt Clone" },
    { name: "description", content: "Search for products" },
  ];
};

export const loader = async () => {
  const categories = await getCategories();
  return { categories };
};

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero title="Categories" subtitle="Browse products by category"></Hero>
      <div className="grid grid-cols-4 gap-10">
        {loaderData.categories.map((category) => (
          <CategoryCard
            key={category.category_id}
            id={category.category_id}
            name={category.name}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
}
