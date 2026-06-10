import {
  ScrollArea,
  Table,
} from "@mantine/core";

import {
  usePlannerStore,
} from "../../store/plannerStore";

import {
  addMonths,
} from "../../engine/dateUtils";

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

export default function InstrumentsTable() {
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
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              Name
            </Table.Th>

            <Table.Th>
              Type
            </Table.Th>

            <Table.Th>
              Rate
            </Table.Th>

            <Table.Th>
              Duration
            </Table.Th>

            <Table.Th>
              Start
            </Table.Th>

            <Table.Th>
              Maturity
            </Table.Th>

            <Table.Th>
              Principal
            </Table.Th>

            <Table.Th>
              Interest
            </Table.Th>

            <Table.Th>
              Value
            </Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {config.instruments.map(
            (
              instrument
            ) => {
              const maturity =
                addMonths(
                  instrument.startMonth,
                  instrument.durationMonths
                );

              const principal =
                instrument.type ===
                "FD"
                  ? instrument.principal
                  : instrument.monthlyContribution *
                    instrument.durationMonths;

              const maturityValue =
                principal *
                Math.pow(
                  1 +
                    instrument.rate /
                      100,
                  instrument.durationMonths /
                    12
                );

              return (
                <Table.Tr
                  key={
                    instrument.id
                  }
                >
                  <Table.Td>
                    {
                      instrument.name
                    }
                  </Table.Td>

                  <Table.Td>
                    {
                      instrument.type
                    }
                  </Table.Td>

                  <Table.Td>
                    {
                      instrument.rate
                    }
                    %
                  </Table.Td>

                  <Table.Td>
                    {
                      instrument.durationMonths
                    }
                  </Table.Td>

                  <Table.Td>
                    {formatMonth(
                      instrument.startMonth
                    )}
                  </Table.Td>

                  <Table.Td>
                    {formatMonth(
                      maturity
                    )}
                  </Table.Td>

                  <Table.Td>
                    {money(
                      principal
                    )}
                  </Table.Td>

                  <Table.Td>
                    {money(
                      maturityValue -
                        principal
                    )}
                  </Table.Td>

                  <Table.Td>
                    {money(
                      maturityValue
                    )}
                  </Table.Td>
                </Table.Tr>
              );
            }
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}