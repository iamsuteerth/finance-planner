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

export default function NetWorthChart() {
  const result =
    useSimulation();

  const data =
    result.rows.map(
      (row) => ({
        month:
          row.month,

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
    >
      <Stack>
        <Text
          fw={700}
        >
          Net Worth
          Trend
        </Text>

        <LineChart
          h={320}
          data={data}
          dataKey="month"
          series={[
            {
              name:
                "netWorth",

              label:
                "Net Worth",
            },
          ]}
        />
      </Stack>
    </Card>
  );
}