"use client";

import { Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", balance: 186 },
  { month: "February", balance: 305 },
  { month: "March", balance: 237 },
  { month: "April", balance: 73 },
  { month: "May", balance: 209 },
  { month: "June", balance: 214 },
];

const chartConfig = {
  balance: {
    label: "Balance",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function TotalBalance() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <p className="text-sm font-normal tracking-tight">Total Balance</p>
        <div>
          <p className="text-2xl font-bold">$1,234</p>
          <p className="text-muted-foreground text-xs">
            +20.1% from last month
          </p>
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
            <Line
              dataKey="balance"
              type="linear"
              stroke="var(--color-balance)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-balance)",
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
