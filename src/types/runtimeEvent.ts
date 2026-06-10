import type { MonthKey } from "./simulation";

export interface RuntimeOneOffExpense {
  id: string;

  type: "ONE_OFF_EXPENSE";

  month: MonthKey;

  amount: number;

  label: string;
}

export interface RuntimeFixedDeposit {
  id: string;

  type: "FD";

  name: string;

  principal: number;

  rate: number;

  startMonth: MonthKey;

  durationMonths: number;
}

export interface RuntimeRecurringDeposit {
  id: string;

  type: "RD";

  name: string;

  monthlyContribution: number;

  rate: number;

  startMonth: MonthKey;

  durationMonths: number;
}

export type RuntimeEvent =
  | RuntimeOneOffExpense
  | RuntimeFixedDeposit
  | RuntimeRecurringDeposit;