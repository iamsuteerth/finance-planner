import type {
  PlannerConfig,
} from "../types/config";

import type {
  BuilderState,
} from "../types/builder";

export function builderToConfig(
  state: BuilderState
): PlannerConfig {
  const investmentSchedule:
    Record<
      string,
      number
    > = {};

  for (const range of state.investmentRanges) {
    let current =
      range.startMonth;

    while (
      current <=
      range.endMonth
    ) {
      investmentSchedule[
        current
      ] =
        range.amount;

      const [
        year,
        month,
      ] =
        current
          .split("-")
          .map(
            Number
          );

      const date =
        new Date(
          year,
          month - 1,
          1
        );

      date.setMonth(
        date.getMonth() +
          1
      );

      current = `${date.getFullYear()}-${String(
        date.getMonth() +
          1
      ).padStart(
        2,
        "0"
      )}`;
    }
  }

  return {
    forecast: {
      startMonth:
        state.startMonth,

      totalMonths:
        state.totalMonths,
    },

    income: {
      monthly:
        state.monthlyIncome,
    },

    cash: {
      openingBalance:
        state.openingCash,
    },

    expenses: {
      defaultMonthly:
        state.defaultMonthlyExpense,

      overrides: {},
    },

    investments: {
      openingCorpus:
        state.openingInvestmentCorpus,

      schedule:
        investmentSchedule,
    },

    creditCardBills:
      state.creditCardBills.map(
        (
          bill
        ) => ({
          ...bill,
        })
      ),

    oneOffExpenses:
      state.oneOffExpenses.map(
        (
          expense,
          index
        ) => ({
          id:
            crypto.randomUUID() ??
            `expense-${index}`,

          ...expense,
        })
      ),

    salaryChanges:
      state.salaryChanges.map(
        (
          change,
          index
        ) => ({
          id:
            crypto.randomUUID() ??
            `salary-${index}`,

          ...change,
        })
      ),

    bonusIncome:
      state.bonusIncome.map(
        (
          bonus,
          index
        ) => ({
          id:
            crypto.randomUUID() ??
            `bonus-${index}`,

          ...bonus,
        })
      ),

    instruments:
      state.instruments.map(
        (
          instrument
        ) => ({
          ...instrument,

          id:
            crypto.randomUUID(),
        })
      ),
  };
}