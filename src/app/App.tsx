import { simulate } from "../engine/simulate";

import { usePlannerStore }
  from "../store/plannerStore";

export default function App() {
  const config =
    usePlannerStore(
      (state) => state.config
    );

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
            row.month >= "2027-11" &&
            row.month <= "2028-03"
        )
        .map((row) => (
          <div
            key={row.month}
            style={{
              marginBottom: 24,
            }}
          >
            <h3>{row.month}</h3>

            <div>
              Income:
              {" "}
              {row.cashflow.income}
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