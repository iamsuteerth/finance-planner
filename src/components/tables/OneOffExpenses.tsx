import {
  ScrollArea,
  Table,
} from "@mantine/core";

import {
  usePlannerStore,
} from "../../store/plannerStore";

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

export default function OneOffExpensesTable() {
  const config =
    usePlannerStore(
      (state) =>
        state.config
    );

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
              Description
            </Table.Th>

            <Table.Th>
              Amount
            </Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {config.oneOffExpenses.map(
            (expense) => (
              <Table.Tr
                key={
                  expense.id
                }
              >
                <Table.Td>
                  {formatMonth(
                    expense.month
                  )}
                </Table.Td>

                <Table.Td>
                  {
                    expense.label
                  }
                </Table.Td>

                <Table.Td>
                  {money(
                    expense.amount
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