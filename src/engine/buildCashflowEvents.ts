import type {
  PlannerConfig,
} from "../types/config";

import type {
  FinancialEvent,
} from "../types/events";

import type {
  MonthKey,
} from "../types/simulation";

export function buildCashflowEvents(
  config: PlannerConfig,
  month: MonthKey
): FinancialEvent[] {
  return config.oneOffExpenses
    .filter(
      (expense) =>
        expense.month === month
    )
    .map((expense) => ({
      id: expense.id,

      month,

      type:
        "ONE_OFF_EXPENSE",

      amount:
        expense.amount,

      description:
        expense.label,
    }));
}