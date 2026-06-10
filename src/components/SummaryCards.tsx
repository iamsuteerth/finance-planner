import {
  Card,
  Grid,
  Group,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconCoins,
  IconWallet,
  IconChartLine,
  IconBuildingBank,
} from "@tabler/icons-react";

import {
  useSimulation,
} from "../hooks/useSimulation";

import {
  usePlannerStore,
} from "../store/plannerStore";

import type {
  ReactNode,
} from "react";

function MetricCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <Card
      radius="xl"
      withBorder
      p="lg"
    >
      <Group
        justify="space-between"
        mb="md"
      >
        <Text
          size="sm"
          c="dimmed"
        >
          {title}
        </Text>

        <ThemeIcon
          radius="xl"
          variant="light"
        >
          {icon}
        </ThemeIcon>
      </Group>

      <Title order={3}>
        {value}
      </Title>
    </Card>
  );
}

export default function SummaryCards() {
  const result =
    useSimulation();

  const config =
    usePlannerStore(
      (state) =>
        state.config
    );

  const finalRow =
    result.rows[
      result.rows.length - 1
    ];

  return (
    <Grid>
      <Grid.Col
        span={{
          base: 12,
          md: 3,
        }}
      >
        <MetricCard
          title="Net Worth"
          value={`₹${Math.round(
            finalRow.assets
              .netWorth
          ).toLocaleString()}`}
          icon={
            <IconChartLine
              size={18}
            />
          }
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          md: 3,
        }}
      >
        <MetricCard
          title="Cash"
          value={`₹${Math.round(
            finalRow.assets
              .cash
          ).toLocaleString()}`}
          icon={
            <IconWallet
              size={18}
            />
          }
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          md: 3,
        }}
      >
        <MetricCard
          title="Investment Corpus"
          value={`₹${Math.round(
            finalRow.assets
              .investmentCorpus
          ).toLocaleString()}`}
          icon={
            <IconCoins
              size={18}
            />
          }
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          md: 3,
        }}
      >
        <MetricCard
          title="Active Instruments"
          value={String(
            config.instruments
              .length
          )}
          icon={
            <IconBuildingBank
              size={18}
            />
          }
        />
      </Grid.Col>
    </Grid>
  );
}