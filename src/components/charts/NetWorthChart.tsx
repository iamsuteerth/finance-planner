import {
  Card,
  Stack,
  Text,
} from "@mantine/core";

import {
  LineChart,
} from "@mantine/charts";

import {
  useSimulation,
} from "../../hooks/useSimulation";
import { formatMonth } from "../../engine/monthFormatting";

export default function NetWorthChart() {
  const result =
    useSimulation();

  const data =
    result.rows.map(
      (row) => ({
        month: formatMonth(
          row.month
        ),

        cash:
          Math.round(
            row.assets.cash
          ),

        investmentCorpus:
          Math.round(
            row.assets
              .investmentCorpus
          ),

        netWorth:
          Math.round(
            row.assets
              .netWorth
          ),
      })
    );

  return (
    <Card
      mt="lg"
      radius="xl"
      shadow="xs"
      withBorder
      p="lg"
      style={{ minWidth: 0 }}
    >
      <Stack style={{ minWidth: 0 }}>
        <Stack gap={0}>
          <Text fw={700}>
            Wealth Projection
          </Text>

          <Text
            size="sm"
            c="dimmed"
          >
            Cash, investments and total net worth over time
          </Text>
        </Stack>
        <LineChart
          h={360}
          w="100%"
          data={data}
          dataKey="month"
          withLegend
          curveType="monotone"
          valueFormatter={(value) =>
            "₹" +
            Number(value).toLocaleString()
          }
          series={[
            {
              name: "cash",
              label: "Cash",
              color: "blue",
            },
            {
              name: "investmentCorpus",
              label: "Investments",
              color: "green",
            },
            {
              name: "netWorth",
              label: "Net Worth",
              color: "violet",
            },
          ]}
        />
      </Stack>
    </Card>
  );
}