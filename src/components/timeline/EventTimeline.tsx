import {
  Badge,
  Card,
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

export default function EventTimeline() {
  const result =
    useSimulation();

  const rows =
    result.rows.filter(
      (row) =>
        row.events.length > 0
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
        <Text fw={700}>
          Financial Timeline
        </Text>

        <Timeline
          active={
            rows.length
          }
          bulletSize={28}
          lineWidth={2}
        >
          {rows.map(
            (row) =>
              row.events.map(
                (event) => (
                  <Timeline.Item
                    key={
                      event.id
                    }
                    bullet={
                      <ThemeIcon
                        variant="light"
                        radius="xl"
                        size="md"
                      >
                        {getEventIcon(
                          event.type
                        )}
                      </ThemeIcon>
                    }
                    title={
                      event.description
                    }
                  >
                    <Group
                      mt={4}
                    >
                      <Badge
                        variant="light"
                      >
                        {
                          row.month
                        }
                      </Badge>

                      <Badge
                        variant="outline"
                      >
                        {
                          event.type
                        }
                      </Badge>
                    </Group>

                    <Text
                      size="sm"
                      c="dimmed"
                      mt={4}
                    >
                      ₹
                      {Math.round(
                        event.amount
                      ).toLocaleString()}
                    </Text>
                  </Timeline.Item>
                )
              )
          )}
        </Timeline>
      </Stack>
    </Card>
  );
}