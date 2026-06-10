import {
  Button,
  Divider,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";

import {
  usePlannerStore,
} from "../../store/plannerStore";

import AddExpenseForm
  from "./AddExpenseForm";

import AddBonusForm
  from "./AddBonusForm";

import AddSalaryChangeForm
  from "./AddSalaryChangeForm";

import AddFdForm
  from "./AddFdForm";

import AddRdForm
  from "./AddRdForm";

import ActiveInstruments
  from "./ActiveInstruments";

export default function ScenarioPanel() {
  const reset =
    usePlannerStore(
      (state) =>
        state.resetOverrides
    );

  return (
    <Stack gap="lg">
      <div>
        <Text fw={700}>
          Scenario Lab
        </Text>

        <Text
          size="sm"
          c="dimmed"
        >
          Explore financial
          what-if scenarios.
        </Text>
      </div>

      <Tabs
        defaultValue="expense"
      >
        <Tabs.List>
          <Tabs.Tab value="expense">
            Expense
          </Tabs.Tab>

          <Tabs.Tab value="bonus">
            Bonus
          </Tabs.Tab>

          <Tabs.Tab value="salary">
            Salary
          </Tabs.Tab>

          <Tabs.Tab value="fd">
            FD
          </Tabs.Tab>

          <Tabs.Tab value="rd">
            RD
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel
          value="expense"
          pt="lg"
        >
          <AddExpenseForm />
        </Tabs.Panel>

        <Tabs.Panel
          value="bonus"
          pt="lg"
        >
          <AddBonusForm />
        </Tabs.Panel>

        <Tabs.Panel
          value="salary"
          pt="lg"
        >
          <AddSalaryChangeForm />
        </Tabs.Panel>

        <Tabs.Panel
          value="fd"
          pt="lg"
        >
          <AddFdForm />
        </Tabs.Panel>

        <Tabs.Panel
          value="rd"
          pt="lg"
        >
          <AddRdForm />
        </Tabs.Panel>
      </Tabs>

      <Button
        color="red"
        variant="light"
        onClick={reset}
      >
        Reset Scenario
      </Button>
      <Divider />
      <ActiveInstruments />

      <Divider />

    </Stack>
  );
}