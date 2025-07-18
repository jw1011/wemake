import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import type { Route } from "./+types/dashboard-product-page";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "~/common/components/ui/chart";
import { Area, CartesianGrid, LineChart, XAxis } from "recharts";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Product Dashboard | wemake" }];
};

const chartData = [
  { month: "January", views: 186, visitors: 100 },
  { month: "February", views: 305, visitors: 40 },
  { month: "March", views: 237, visitors: 65 },
  { month: "April", views: 73, visitors: 21 },
  { month: "May", views: 209, visitors: 87 },
  { month: "June", views: 214, visitors: 90 },
];

const chartConfig = {
  views: {
    label: "🌭Views",
    color: "var(--chart-2)",
  },
  visitors: {
    label: "🍟Visitors",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function DashboardProductPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold mb-6">Analytics</h1>
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Area
                dataKey="views"
                type="natural"
                stroke="var(--chart-2)"
                strokeWidth={2}
                dot={false}
              />
              <Area
                dataKey="visitors"
                type="natural"
                stroke="var(--chart-1)"
                fill="var(--chart-1)"
                strokeWidth={2}
                dot={false}
              />
              <ChartTooltip
                cursor={false}
                wrapperStyle={{ minWidth: "150px" }}
                content={<ChartTooltipContent indicator="line" />}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
