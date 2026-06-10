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
          row =>
            row.events.length > 0
        )
        .map(row => (
          <pre key={row.month}>
            {JSON.stringify(
              row.events,
              null,
              2
            )}
          </pre>
        ))}
    </div>
  );
}