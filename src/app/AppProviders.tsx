import {
  ColorSchemeScript,
  MantineProvider,
} from "@mantine/core";

import {
  useLocalStorage,
} from "@mantine/hooks";

import type {
  ReactNode,
} from "react";

interface Props {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: Props) {
  const [
    colorScheme,
    setColorScheme,
  ] = useLocalStorage<
    "light" | "dark"
  >({
    key:
      "finance-planner-theme",

    defaultValue:
      "dark",
  });

  return (
    <>
      <ColorSchemeScript />

      <MantineProvider
        forceColorScheme={
          colorScheme
        }
      >
        {children}
      </MantineProvider>
    </>
  );
}