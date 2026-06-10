import {
  Badge,
  Group,
  ScrollArea,
  Stack,
  Table,
} from "@mantine/core";

import {
  useSimulation,
} from "../../hooks/useSimulation";

function formatCurrency(
  value: number
) {
  return `₹${Math.round(
    value
  ).toLocaleString()}`;
}

export default function ForecastTable() {
  const result =
    useSimulation();

  return (
    <Stack gap="md">
      <Group
        justify="space-between"
      >
        <div />
        <Badge
          variant="light"
        >
          {
            result.rows.length
          }{" "}
          Months
        </Badge>
        <div/>
      </Group>

      <ScrollArea>
        <Table
          striped
          highlightOnHover
          verticalSpacing="sm"
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                Month
              </Table.Th>

              <Table.Th>
                Cash
              </Table.Th>

              <Table.Th>
                Net Worth
              </Table.Th>

              <Table.Th>
                FD
              </Table.Th>

              <Table.Th>
                RD
              </Table.Th>

              <Table.Th>
                Events
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {result.rows.map(
              (row) => (
                <Table.Tr
                  key={
                    row.month
                  }
                >
                  <Table.Td>
                    {row.month}
                  </Table.Td>

                  <Table.Td>
                    {formatCurrency(
                      row.assets.cash
                    )}
                  </Table.Td>

                  <Table.Td>
                    {formatCurrency(
                      row.assets
                        .netWorth
                    )}
                  </Table.Td>

                  <Table.Td>
                    {formatCurrency(
                      row.assets
                        .fdValue
                    )}
                  </Table.Td>

                  <Table.Td>
                    {formatCurrency(
                      row.assets
                        .rdValue
                    )}
                  </Table.Td>

                  <Table.Td>
                    <Badge
                      variant="light"
                    >
                      {
                        row.events
                          .length
                      }
                    </Badge>
                  </Table.Td>
                </Table.Tr>
              )
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Stack>
  );
}