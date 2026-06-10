import type { PlannerConfig } from "../types/config";

import type { SimulationState } from "../types/simulationState";

export function createInitialState(
  config: PlannerConfig
): SimulationState {
  return {
    cash:
      config.cash.openingBalance,

    investmentCorpus: 0,

    fds: [],

    rds: [],
  };
}