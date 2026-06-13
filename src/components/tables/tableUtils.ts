export function money(value: number): string {
  return "₹" + Math.round(value).toLocaleString("en-IN");
}
 
export function sumEvents<T extends { type: string; amount: number }>(
  events: T[],
  type: string
): number {
  return events
    .filter((e) => e.type === type)
    .reduce((sum, e) => sum + e.amount, 0);
}
 
export function netInstrumentFlow<T extends { type: string; amount: number }>(
  events: T[]
): number {
  const INSTRUMENT_TYPES = ["FD_CREATED", "FD_MATURED", "RD_CREATED", "RD_MATURED"];
  return events
    .filter((e) => INSTRUMENT_TYPES.includes(e.type))
    .reduce((sum, e) => {
      const isOutflow = e.type === "FD_CREATED" || e.type === "RD_CREATED";
      return sum + (isOutflow ? -e.amount : e.amount);
    }, 0);
}