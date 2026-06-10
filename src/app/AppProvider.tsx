import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import {
  MantineProvider,
} from "@mantine/core";

import {
  useLocalStorage,
} from "@mantine/hooks";

type ColorScheme = "light" | "dark";

interface ThemeContextValue {
  colorScheme: ColorScheme;
  toggleTheme: () => void;
}

const ThemeContext =
  createContext<ThemeContextValue | null>(
    null
  );

export function AppProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    colorScheme,
    setColorScheme,
  ] = useLocalStorage<ColorScheme>({
    key: "finance-planner-theme",
    defaultValue: "light",
  });

  const toggleTheme = () => {
    setColorScheme((current) =>
      current === "dark"
        ? "light"
        : "dark"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        toggleTheme,
      }}
    >
      <MantineProvider
        forceColorScheme={
          colorScheme
        }
      >
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within AppProvider"
    );
  }

  return context;
}