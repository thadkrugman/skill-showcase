"use client";

import { Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "January", income: 186, expenses: 305 },
  { month: "February", income: 305, expenses: 237 },
  { month: "March", income: 237, expenses: 73 },
  { month: "April", income: 73, expenses: 209 },
  { month: "May", income: 209, expenses: 214 },
  { month: "June", income: 300, expenses: 214 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export default function TotalBalance() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <p className="text-sm font-normal tracking-tight">Income vs Expenses</p>
        <div>
          <p className="text-2xl font-bold">$1,234 Income</p>
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            Trending up 20.1% from last month <TrendingUp className="h-4 w-4" />
          </div>
        </div>
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
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="income"
              type="linear"
              stroke="var(--color-income)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-income)",
              }}
              activeDot={{
                r: 6,
              }}
            />
            <Line
              dataKey="expenses"
              type="linear"
              stroke="var(--color-expenses)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-expenses)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
