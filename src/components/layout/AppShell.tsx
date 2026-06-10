import {
  AppShell,
  Burger,
  Drawer,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import {
  useDisclosure,
} from "@mantine/hooks";

import type {
  ReactNode,
} from "react";

import ThemeToggle
  from "./ThemeToggle";

import ScenarioPanel
  from "../scenario/ScenarioPanel";

interface Props {
  children: ReactNode;
}

export default function PlannerShell({
  children,
}: Props) {
  const [
    opened,
    { open, close },
  ] = useDisclosure(
    false
  );

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Scenario Lab"
        size="100%"
        hiddenFrom="sm"
      >
        <ScenarioPanel />
      </Drawer>

      <AppShell
        header={{
          height: 70,
        }}
        navbar={{
          width: 340,

          breakpoint:
            "sm",

          collapsed: {
            mobile: true,
          },
        }}
        padding="lg"
      >
        <AppShell.Header>
          <Group
            justify="space-between"
            h="100%"
            px="md"
          >
            <Group>
              <Burger
                hiddenFrom="sm"
                opened={opened}
                onClick={open}
                size="sm"
              />

              <Stack gap={0}>
                <Title
                  order={4}
                  fw={700}
                >
                  Finance Planner
                </Title>

                <Text
                  size="xs"
                  c="dimmed"
                >
                  Personal Wealth
                  Forecast
                </Text>
              </Stack>
            </Group>

            <ThemeToggle />
          </Group>
        </AppShell.Header>

        <AppShell.Navbar
          visibleFrom="sm"
          p="lg"
          style={{
            overflowY:
              "auto",
            overflowX:
              "hidden",
          }}
        >
          <ScenarioPanel />
        </AppShell.Navbar>

        <AppShell.Main>
          {children}
        </AppShell.Main>
      </AppShell>
    </>
  );
}