"use client";

import { useQueryState } from "nuqs";
import DashboardFeature from "./DashboardFeature";
import BalanceFeature from "./BalanceFeature";
import SpendingFeature from "./SpendingFeature";
import TrackerFeature from "./TrackerFeature";
import SavingsFeature from "./SavingsFeature";

export default function TabContent() {
  const [activeTab] = useQueryState("tab", {
    defaultValue: "",
  });

  // Use dashboard when parameter is empty
  const currentTab = activeTab || "dashboard";

  switch (currentTab) {
    case "dashboard":
      return <DashboardFeature />;
    case "balance":
      return <BalanceFeature />;
    case "tracker":
      return <TrackerFeature />;
    case "spending":
      return <SpendingFeature />;
    case "savings":
      return <SavingsFeature />;
    default:
      return <DashboardFeature />;
  }
}
