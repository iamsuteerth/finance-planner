import {
  Card,
  ScrollArea,
  Table,
  Text,
} from "@mantine/core";

import {
  useSimulation,
} from "../../hooks/useSimulation";

import {
  formatMonth,
} from "../../engine/monthFormatting";

function money(
  value: number
) {
  return (
    "₹" +
    Math.round(
      value
    ).toLocaleString()
  );
}

export default function CashflowTable() {
  const result =
    useSimulation();

  return (
    <Card
      mt="lg"
      radius="xl"
      shadow="xs"
      withBorder
      p="lg"
    >
      <Text
        fw={700}
        mb="md"
      >
        Cashflow
      </Text>

      <ScrollArea>
        <Table
          striped
          highlightOnHover
          withTableBorder
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                Month
              </Table.Th>

              <Table.Th>
                Open
              </Table.Th>

              <Table.Th>
                Flat Exp
              </Table.Th>

              <Table.Th>
                CC Bill
              </Table.Th>

              <Table.Th>
                One-Off
              </Table.Th>

              <Table.Th>
                Invest
              </Table.Th>

              <Table.Th>
                Total Out
              </Table.Th>

              <Table.Th>
                Close
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
                    {formatMonth(
                      row.month
                    )}
                  </Table.Td>

                  <Table.Td>
                    {money(
                      row.openingBalance
                    )}
                  </Table.Td>

                  <Table.Td>
                    {money(
                      row.cashflow
                        .flatExpense
                    )}
                  </Table.Td>

                  <Table.Td>
                    {money(
                      row.cashflow
                        .creditCardExpense
                    )}
                  </Table.Td>

                  <Table.Td>
                    {money(
                      row.cashflow
                        .oneOffExpense
                    )}
                  </Table.Td>

                  <Table.Td>
                    {money(
                      row.cashflow
                        .investmentAmount
                    )}
                  </Table.Td>

                  <Table.Td>
                    {money(
                      row.cashflow
                        .totalOutflow
                    )}
                  </Table.Td>

                  <Table.Td>
                    {money(
                      row.closingBalance
                    )}
                  </Table.Td>
                </Table.Tr>
              )
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Card>
  );
}