import type {
  PlannerConfig,
} from "../types/config";

import type {
  PlannerOverrides,
} from "../types/overrides";

export interface ImportedPlan {
  baseConfig: PlannerConfig;
  overrides: PlannerOverrides;
}

export async function importPlan(
  file: File
): Promise<ImportedPlan> {
  const text =
    await file.text();

  const parsed =
    JSON.parse(text);

  if (
    !parsed.baseConfig ||
    !parsed.overrides
  ) {
    throw new Error(
      "Invalid plan file"
    );
  }

  return parsed;
}