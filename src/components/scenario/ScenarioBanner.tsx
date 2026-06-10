import {
  Badge,
  Group,
  Paper,
  Text,
} from "@mantine/core";

import {
  usePlannerStore,
} from "../../store/plannerStore";

export default function ScenarioBanner() {
  const events =
    usePlannerStore(
      (state) =>
        state.overrides
          .runtimeEvents
    ) ?? [];
  if (
    events.length === 0
  ) {
    return null;
  }

  const types =
    new Set(
      events.map(
        (event) =>
          event.type
      )
    );

  return (
    <Paper
      radius="xl"
      p="md"
      mt="md"
      withBorder
    >
      <Group
        justify="space-between"
      >
        <div>
          <Text
            fw={600}
          >
            Scenario Active
          </Text>

          <Text
            size="sm"
            c="dimmed"
          >
            {
              events.length
            }{" "}
            modification
            {events.length > 1
              ? "s"
              : ""}
          </Text>
        </div>

        <Group gap={6}>
          {types.has(
            "ONE_OFF_EXPENSE"
          ) && (
              <Badge
                color="red"
                variant="light"
              >
                Expense
              </Badge>
            )}

          {types.has(
            "BONUS_INCOME"
          ) && (
              <Badge
                color="green"
                variant="light"
              >
                Bonus
              </Badge>
            )}

          {types.has(
            "SALARY_CHANGE"
          ) && (
              <Badge
                color="blue"
                variant="light"
              >
                Salary
              </Badge>
            )}

          {types.has(
            "FD"
          ) && (
              <Badge
                color="cyan"
                variant="light"
              >
                FD
              </Badge>
            )}

          {types.has(
            "RD"
          ) && (
              <Badge
                color="grape"
                variant="light"
              >
                RD
              </Badge>
            )}
        </Group>
      </Group>
    </Paper>
  );
}