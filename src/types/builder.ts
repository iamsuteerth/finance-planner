import type {
  MonthKey,
} from "./simulation";

import type {
  FixedDeposit,
  RecurringDeposit,
} from "./instrument";

export interface InvestmentRange {
  startMonth: MonthKey;
  endMonth: MonthKey;
  amount: number;
}

export interface BuilderState {
  startMonth: MonthKey;
  totalMonths: number;

  monthlyIncome: number;

  openingCash: number;
  openingInvestmentCorpus: number;

  defaultMonthlyExpense: number;

  investmentRanges: InvestmentRange[];

  creditCardBills: {
    month: MonthKey;
    amount: number;
  }[];

  oneOffExpenses: {
    month: MonthKey;
    label: string;
    amount: number;
  }[];

  salaryChanges: {
    effectiveMonth: MonthKey;
    newMonthlyIncome: number;
    description: string;
  }[];

  bonusIncome: {
    month: MonthKey;
    amount: number;
    description: string;
  }[];

  instruments: (
    | FixedDeposit
    | RecurringDeposit
  )[];
}