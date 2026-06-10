import PlannerShell
  from "../components/layout/AppShell";

import SummaryCards
  from "../components/SummaryCards";

import NetWorthChart
  from "../components/charts/NetWorthChart";
import DashboardTabs from "../components/dashboard/DashboardTabs";

export default function App() {
  return (
    <PlannerShell>
      <SummaryCards />

      <NetWorthChart />

      <DashboardTabs />
    </PlannerShell>
  );
}