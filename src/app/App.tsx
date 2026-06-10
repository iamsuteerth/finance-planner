import PlannerShell
  from "../components/layout/AppShell";

import SummaryCards
  from "../components/summary/SummaryCards";

import NetWorthChart
  from "../components/charts/NetWorthChart";

import ForecastTable
  from "../components/forecast/ForecastTable";

export default function App() {
  return (
    <PlannerShell>
      <SummaryCards />

      <NetWorthChart />

      <ForecastTable />
    </PlannerShell>
  );
}