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

export default function NetWorthTable() {
  const result =
    useSimulation();

  return (
    <ScrollArea>
      <Table
        striped
        highlightOnHover
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
              Investment
            </Table.Th>

            <Table.Th>
              FD
            </Table.Th>

            <Table.Th>
              RD
            </Table.Th>

            <Table.Th>
              Net Worth
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
                    row.assets.cash
                  )}
                </Table.Td>

                <Table.Td>
                  {money(
                    row.assets
                      .investmentCorpus
                  )}
                </Table.Td>

                <Table.Td>
                  {money(
                    row.assets.fdValue
                  )}
                </Table.Td>

                <Table.Td>
                  {money(
                    row.assets.rdValue
                  )}
                </Table.Td>

                <Table.Td>
                  {money(
                    row.assets
                      .netWorth
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