import {
  Badge,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
} from "@mantine/core";

import {
  IconArrowUp,
  IconArrowDown,
  IconBriefcase,
  IconCoins,
  IconTrendingUp,
  IconWallet,
} from "@tabler/icons-react";

import {
  useSimulation,
} from "../../hooks/useSimulation";

import {
  formatMonth,
} from "../../engine/monthFormatting";

function getEventIcon(
  type: string
) {
  switch (type) {
    case "BONUS_INCOME":
      return (
        <IconCoins
          size={16}
        />
      );

    case "SALARY_CHANGE":
      return (
        <IconTrendingUp
          size={16}
        />
      );

    case "ONE_OFF_EXPENSE":
      return (
        <IconArrowDown
          size={16}
        />
      );

    case "FD_CREATED":
      return (
        <IconWallet
          size={16}
        />
      );

    case "FD_MATURED":
      return (
        <IconArrowUp
          size={16}
        />
      );

    case "RD_CREATED":
      return (
        <IconBriefcase
          size={16}
        />
      );

    case "RD_MATURED":
      return (
        <IconArrowUp
          size={16}
        />
      );

    default:
      return (
        <IconCoins
          size={16}
        />
      );
  }
}

function getEventLabel(
  type: string
) {
  switch (type) {
    case "BONUS_INCOME":
      return "Bonus Income";

    case "SALARY_CHANGE":
      return "Salary Change";

    case "ONE_OFF_EXPENSE":
      return "Expense";

    case "FD_CREATED":
      return "FD Created";

    case "FD_MATURED":
      return "FD Matured";

    case "RD_CREATED":
      return "RD Created";

    case "RD_MATURED":
      return "RD Matured";

    default:
      return type;
  }
}

function formatMoney(
  amount: number
) {
  return (
    "₹" +
    Math.round(
      amount
    ).toLocaleString()
  );
}

export default function EventTimeline() {
  const result =
    useSimulation();

  const rows =
    result.rows.filter(
      (row) =>
        row.events.length > 0
    );

  return (
    <Timeline
      bulletSize={30}
      lineWidth={2}
    >
      {rows.flatMap(
        (row) =>
          row.events.map(
            (event) => (
              <Timeline.Item
                key={
                  event.id
                }
                bullet={
                  <ThemeIcon
                    size="md"
                    radius="xl"
                    variant="light"
                  >
                    {getEventIcon(
                      event.type
                    )}
                  </ThemeIcon>
                }
                title={
                  <Group
                    gap="xs"
                  >
                    <Text fw={600}>
                      {
                        event.description
                      }
                    </Text>

                    <Badge
                      variant="light"
                      size="sm"
                    >
                      {getEventLabel(
                        event.type
                      )}
                    </Badge>
                  </Group>
                }
              >
                <Stack
                  gap={4}
                  mt={4}
                >
                  <Text
                    size="sm"
                    c="dimmed"
                  >
                    {formatMonth(
                      row.month
                    )}
                  </Text>

                  <Text
                    fw={500}
                  >
                    {formatMoney(
                      event.amount
                    )}
                  </Text>
                </Stack>
              </Timeline.Item>
            )
          )
      )}
    </Timeline>
  );
}