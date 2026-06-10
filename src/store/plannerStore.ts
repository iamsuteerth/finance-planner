import { create } from "zustand";

import configJson from "../data/config.json";

import type { PlannerConfig } from "../types/config";

import type { PlannerOverrides, } from "../types/overrides";

import { buildEffectiveConfig } from "../engine/buildEffectiveConfig";

import type { MonthKey } from "../types/simulation";

interface PlannerStore {
  baseConfig: PlannerConfig;

  overrides: PlannerOverrides;

  config: PlannerConfig;

  addTransientOneOffExpense: (
    month: MonthKey,
    amount: number,
    label: string
  ) => void;

  addTransientFd: (
    month: MonthKey,
    principal: number,
    rate: number,
    durationMonths: number,
    name: string
  ) => void;

  addTransientRd: (
    month: MonthKey,
    monthlyContribution: number,
    rate: number,
    durationMonths: number,
    name: string
  ) => void;

  setOverrides: (
    overrides: Partial<PlannerOverrides>
  ) => void;

  resetOverrides: () => void;

  resetAll: () => void;
}

const initialConfig =
  configJson as PlannerConfig;

export const usePlannerStore =
  create<PlannerStore>((set) => ({
    baseConfig:
      initialConfig,

    overrides: {},

    config:
      initialConfig,

    addTransientOneOffExpense:
      (
        month,
        amount,
        label
      ) =>
        set((state) => {
          const current =
            state.overrides
              .runtimeEvents ?? [];

          const overrides: PlannerOverrides = {
            ...state.overrides,

            runtimeEvents: [
              ...current,
              {
                id:
                  crypto.randomUUID(),
                type:
                  "ONE_OFF_EXPENSE",
                month,
                amount,
                label,
              }
            ],
          };

          return {
            overrides,
            config: buildEffectiveConfig(
              state.baseConfig,
              overrides
            ),
          } satisfies Partial<PlannerStore>;
        }),

    addTransientFd:
      (
        month,
        principal,
        rate,
        durationMonths,
        name
      ) =>
        set((state) => {
          const current =
            state.overrides
              .runtimeEvents ?? [];

          const overrides: PlannerOverrides = {
            ...state.overrides,

            runtimeEvents: [
              ...current,

              {
                id:
                  crypto.randomUUID(),

                type: "FD",

                name,

                principal,

                rate,

                startMonth:
                  month,

                durationMonths,
              },
            ],
          };

          return {
            overrides,

            config:
              buildEffectiveConfig(
                state.baseConfig,
                overrides
              ),
          };
        }),

    addTransientRd:
      (
        month,
        monthlyContribution,
        rate,
        durationMonths,
        name
      ) =>
        set((state) => {
          const current =
            state.overrides
              .runtimeEvents ?? [];

          const overrides: PlannerOverrides = {
            ...state.overrides,

            runtimeEvents: [
              ...current,

              {
                id:
                  crypto.randomUUID(),

                type: "RD",

                name,

                monthlyContribution,

                rate,

                startMonth:
                  month,

                durationMonths,
              },
            ],
          };

          return {
            overrides,

            config:
              buildEffectiveConfig(
                state.baseConfig,
                overrides
              ),
          };
        }),

    setOverrides: (
      incomingOverrides
    ) =>
      set((state) => {
        const overrides = {
          ...state.overrides,
          ...incomingOverrides,
        };

        return {
          overrides,

          config:
            buildEffectiveConfig(
              state.baseConfig,
              overrides
            ),
        };
      }),

    resetOverrides: () =>
      set((state) => ({
        overrides: {},

        config:
          buildEffectiveConfig(
            state.baseConfig,
            {}
          ),
      })),

    resetAll: () =>
      set({
        baseConfig:
          initialConfig,

        overrides: {},

        config:
          initialConfig,
      }),
  }));