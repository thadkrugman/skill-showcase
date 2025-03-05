import FeatureSection from "./FeatureSection";
import TotalBalance from "@/app/app/components/total-balance";
import ExpenseBreakdown from "@/app/app/components/expense-breakdown";
import IncomeVsExpenses from "@/app/app/components/income-vs-expenses";

export default function DashboardFeature() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <TotalBalance />
        <TotalBalance />
        <TotalBalance />
        <TotalBalance />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <IncomeVsExpenses />
        <ExpenseBreakdown />
      </div>
    </div>
  );
}
