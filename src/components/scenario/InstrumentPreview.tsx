import {
  Badge,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";

import {
  IconTrendingUp,
} from "@tabler/icons-react";

interface Props {
  title: string;

  maturityValue: string;

  interest: string;

  maturityMonth: string;

  subtitle?: string;
}

export default function InstrumentPreview({
  title,
  maturityValue,
  interest,
  maturityMonth,
  subtitle,
}: Props) {
  return (
    <Card
      radius="xl"
      withBorder
      bg="var(--mantine-color-body)"
    >
      <Stack gap="md">
        <Group
          justify="space-between"
        >
          <Stack gap={0}>
            <Text
              fw={700}
            >
              {title}
            </Text>

            {subtitle && (
              <Text
                size="sm"
                c="dimmed"
              >
                {subtitle}
              </Text>
            )}
          </Stack>

          <ThemeIcon
            size="lg"
            radius="xl"
            variant="light"
          >
            <IconTrendingUp
              size={18}
            />
          </ThemeIcon>
        </Group>

        <SimpleGrid cols={2}>
          <div>
            <Text
              size="xs"
              c="dimmed"
            >
              Maturity Value
            </Text>

            <Text fw={700}>
              {maturityValue}
            </Text>
          </div>

          <div>
            <Text
              size="xs"
              c="dimmed"
            >
              Interest Earned
            </Text>

            <Text fw={700}>
              {interest}
            </Text>
          </div>
        </SimpleGrid>

        <Badge
          variant="light"
          size="lg"
        >
          Matures {maturityMonth}
        </Badge>
      </Stack>
    </Card>
  );
}