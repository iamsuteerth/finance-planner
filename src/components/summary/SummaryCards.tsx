import {
  Card,
  Grid,
  Text,
  Title,
} from "@mantine/core";

import {
  useSimulation,
} from "../../hooks/useSimulation";

export default function SummaryCards() {
  const result =
    useSimulation();

  return (
    <Grid>
      <Grid.Col
        span={{
          base: 12,
          md: 4,
        }}
      >
        <Card
          shadow="sm"
          radius="lg"
          withBorder
        >
          <Text
            c="dimmed"
            size="sm"
          >
            Final Net Worth
          </Text>

          <Title order={2}>
            ₹
            {Math.round(
              result.summary
                .finalNetWorth
            ).toLocaleString()}
          </Title>
        </Card>
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          md: 4,
        }}
      >
        <Card
          shadow="sm"
          radius="lg"
          withBorder
        >
          <Text
            c="dimmed"
            size="sm"
          >
            Final Cash
          </Text>

          <Title order={2}>
            ₹
            {Math.round(
              result.summary
                .finalBalance
            ).toLocaleString()}
          </Title>
        </Card>
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          md: 4,
        }}
      >
        <Card
          shadow="sm"
          radius="lg"
          withBorder
        >
          <Text
            c="dimmed"
            size="sm"
          >
            Lowest Balance
          </Text>

          <Title order={2}>
            ₹
            {Math.round(
              result.summary
                .lowestBalance
            ).toLocaleString()}
          </Title>
        </Card>
      </Grid.Col>
    </Grid>
  );
}