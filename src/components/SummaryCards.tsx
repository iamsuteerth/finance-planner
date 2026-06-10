import {
  Card,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import {
  useSimulation,
} from "../hooks/useSimulation";

export default function SummaryCards() {
  const result =
    useSimulation();

  const cards = [
    {
      label:
        "Final Net Worth",

      value:
        result.summary
          .finalNetWorth,
    },

    {
      label:
        "Final Cash",

      value:
        result.summary
          .finalBalance,
    },

    {
      label:
        "Lowest Balance",

      value:
        result.summary
          .lowestBalance,
    },
  ];

  return (
    <Grid>
      {cards.map(
        (card) => (
          <Grid.Col
            key={
              card.label
            }
            span={{
              base: 12,
              md: 4,
            }}
          >
            <Card
              radius="xl"
              shadow="xs"
              withBorder
              p="lg"
            >
              <Stack
                gap={6}
              >
                <Text
                  size="xs"
                  tt="uppercase"
                  fw={700}
                  c="dimmed"
                >
                  {
                    card.label
                  }
                </Text>

                <Title
                  order={2}
                >
                  ₹
                  {Math.round(
                    card.value
                  ).toLocaleString()}
                </Title>
              </Stack>
            </Card>
          </Grid.Col>
        )
      )}
    </Grid>
  );
}