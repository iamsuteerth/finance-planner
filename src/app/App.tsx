import { useEffect } from "react";

import { simulate }
  from "../engine/simulate";

import { usePlannerStore }
  from "../store/plannerStore";

export default function App() {
  const config =
    usePlannerStore(
      (state) => state.config
    );

  const addBonus =
    usePlannerStore(
      (state) =>
        state.addTransientBonusIncome
    );

  const addSalary =
    usePlannerStore(
      (state) =>
        state.addTransientSalaryChange
    );

  useEffect(() => {
    addBonus(
      "2028-02",
      50000,
      "Performance Bonus"
    );

    addSalary(
      "2028-04",
      175000,
      "Senior Promotion"
    );
  }, []);

  const result =
    simulate(config);

  return (
    <div
      style={{
        padding: 24,
      }}
    >
      {result.rows
        .filter(
          (row) =>
            row.month >=
              "2028-01" &&
            row.month <=
              "2028-05"
        )
        .map((row) => (
          <div
            key={row.month}
            style={{
              marginBottom: 24,
            }}
          >
            <h3>
              {row.month}
            </h3>

            <div>
              Income:
              {" "}
              {
                row.cashflow
                  .income
              }
            </div>

            <pre>
              {JSON.stringify(
                row.events,
                null,
                2
              )}
            </pre>
          </div>
        ))}
    </div>
  );
}