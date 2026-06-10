import {
  ScrollArea,
  Table,
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
              Open
            </Table.Th>

            <Table.Th>
              Income
            </Table.Th>

            <Table.Th>
              Expenses
            </Table.Th>

            <Table.Th>
              CC
            </Table.Th>

            <Table.Th>
              One-Off
            </Table.Th>

            <Table.Th>
              Invest
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
                      .income
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
                    row.closingBalance
                  )}
                </Table.Td>
              </Table.Tr>
            )
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}