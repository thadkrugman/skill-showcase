"use client";

import { useQueryState } from "nuqs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Container from "@/components/shared/container";

const tabs = [
  { id: "dashboard", label: "Dashboard" },
  { id: "balance", label: "Total Balance" },
  { id: "tracker", label: "Income Tracker" },
  { id: "spending", label: "Monthly Spending" },
  { id: "savings", label: "Savings Progress" },
];

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useQueryState("tab", {
    defaultValue: "",
  });

  // Use dashboard when parameter is empty
  const currentTab = activeTab || "dashboard";

  return (
    <Container
      className="scrollbar-hide flex-row items-center overflow-x-auto py-4"
      borderBottom={true}
    >
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.id === "dashboard" ? "/" : `/?tab=${tab.id}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(tab.id === "dashboard" ? null : tab.id);
          }}
          className={cn(
            "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium whitespace-nowrap transition-colors",
            currentTab === tab.id
              ? "bg-muted text-primary"
              : "text-muted-foreground hover:text-primary",
          )}
          aria-current={currentTab === tab.id ? "page" : undefined}
        >
          {tab.label}
        </Link>
      ))}

      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </Container>
  );
}
