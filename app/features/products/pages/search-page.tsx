import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/search-page";
import { z } from "zod";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
import { Form } from "react-router";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
import { getPagesBySearch, getProductsBySearch } from "../queries";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Search Products | ProductHunt Clone" },
    { name: "description", content: "Search for products" },
  ];
};

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export async function loader({ request, params }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw new Error("Invalid params");
  }
  if (parsedData.query === "") {
    return { products: [], totalPages: 1 };
  }
  const products = await getProductsBySearch({
    query: parsedData.query,
    page: parsedData.page,
  });
  const totalPages = await getPagesBySearch({ query: parsedData.query });
  return { products, totalPages };
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title="Search"
        subtitle="Search for products by title or description"
      ></Hero>
      <Form className="flex justify-center max-w-screen-sm items-center mx-auto gap-2">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        ></Input>
        <Button type="submit">Search</Button>
      </Form>

      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {loaderData.products.map((product) => (
          <ProductCard
            key={product.product_id}
            id={product.product_id}
            name={product.name}
            description={product.tagline}
            reviewsCount={product.reviews}
            viewsCount={product.views}
            votesCount={product.upvotes}
          />
        ))}
      </div>
      <ProductPagination totalPages={loaderData.totalPages} />
    </div>
  );
}
