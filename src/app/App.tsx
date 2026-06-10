import PlannerShell
  from "../components/layout/AppShell";

import SummaryCards
  from "../components/SummaryCards";

import NetWorthChart
  from "../components/charts/NetWorthChart";
import DashboardTabs from "../components/dashboard/DashboardTabs";
import ScenarioBanner from "../components/scenario/ScenarioBanner";

export default function App() {
  return (
    <PlannerShell>
      <SummaryCards />

      <ScenarioBanner />

      <NetWorthChart />

      <DashboardTabs />
    </PlannerShell>
  );
}