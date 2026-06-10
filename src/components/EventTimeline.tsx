import { useSimulation }
  from "../hooks/useSimulation";

export default function EventTimeline() {
  const result =
    useSimulation();

  const rows =
    result.rows.filter(
      (row) =>
        row.events.length > 0
    );

  return (
    <div>
      <h2>
        Timeline
      </h2>

      {rows.map((row) => (
        <div
          key={row.month}
        >
          <h3>
            {row.month}
          </h3>

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