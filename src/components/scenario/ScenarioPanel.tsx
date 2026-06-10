import {
  Button,
  Divider,
  Stack,
  Text,
} from "@mantine/core";

import AddExpenseForm
  from "./AddExpenseForm";

import { usePlannerStore }
  from "../../store/plannerStore";

export default function ScenarioPanel() {
  const reset =
    usePlannerStore(
      (state) =>
        state.resetOverrides
    );

  return (
    <Stack>
      <Text fw={700}>
        Scenario Lab
      </Text>

      <Text
        size="sm"
        c="dimmed"
      >
        Explore what-if
        financial scenarios.
      </Text>

      <Divider />

      <AddExpenseForm />

      <Divider />

      <Button
        color="red"
        variant="light"
        onClick={reset}
      >
        Reset Scenario
      </Button>
    </Stack>
  );
}