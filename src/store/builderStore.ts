import { create } from "zustand";

import type {
  BuilderState,
  InvestmentRange,
} from "../types/builder";

import type {
  MonthKey,
} from "../types/simulation";

const initialState: BuilderState = {
  startMonth:
    new Date()
      .toISOString()
      .slice(0, 7) as MonthKey,

  totalMonths:
    36,

  monthlyIncome:
    0,

  openingCash:
    0,

  openingInvestmentCorpus:
    0,

  defaultMonthlyExpense:
    0,

  investmentRanges:
    [],

  creditCardBills:
    [],

  oneOffExpenses:
    [],

  salaryChanges:
    [],

  bonusIncome:
    [],

  instruments:
    [],
};

interface BuilderStore {
  state: BuilderState;

  setForecast: (
    startMonth: MonthKey,
    totalMonths: number
  ) => void;

  setBaseline: (
    monthlyIncome: number,
    openingCash: number,
    openingInvestmentCorpus: number,
    defaultMonthlyExpense: number
  ) => void;

  addInvestmentRange: (
    range: InvestmentRange
  ) => void;

  removeInvestmentRange: (
    index: number
  ) => void;

  setState: (
    updater: Partial<BuilderState>
  ) => void;

  reset: () => void;
}

export const useBuilderStore =
  create<BuilderStore>(
    (set) => ({
      state:
        initialState,

      setForecast: (
        startMonth,
        totalMonths
      ) =>
        set(
          (
            store
          ) => ({
            state: {
              ...store.state,

              startMonth,

              totalMonths,
            },
          })
        ),

      setBaseline: (
        monthlyIncome,
        openingCash,
        openingInvestmentCorpus,
        defaultMonthlyExpense
      ) =>
        set(
          (
            store
          ) => ({
            state: {
              ...store.state,

              monthlyIncome,

              openingCash,

              openingInvestmentCorpus,

              defaultMonthlyExpense,
            },
          })
        ),

      addInvestmentRange:
        (range) =>
          set((store) => {
            const existing =
              store.state
                .investmentRanges;

            if (
              range.startMonth >
              range.endMonth
            ) {
              return store;
            }

            const overlap =
              existing.some(
                (current) =>
                  !(
                    range.endMonth <
                    current.startMonth ||
                    range.startMonth >
                    current.endMonth
                  )
              );

            if (overlap) {
              return store;
            }

            return {
              state: {
                ...store.state,

                investmentRanges: [
                  ...existing,
                  range,
                ],
              },
            };
          }),

      removeInvestmentRange:
        (
          index
        ) =>
          set(
            (
              store
            ) => ({
              state: {
                ...store.state,

                investmentRanges:
                  store.state.investmentRanges.filter(
                    (
                      _,
                      i
                    ) =>
                      i !==
                      index
                  ),
              },
            })
          ),

      setState:
        (
          updater
        ) =>
          set(
            (
              store
            ) => ({
              state: {
                ...store.state,

                ...updater,
              },
            })
          ),

      reset:
        () =>
          set({
            state:
              initialState,
          }),
    })
  );