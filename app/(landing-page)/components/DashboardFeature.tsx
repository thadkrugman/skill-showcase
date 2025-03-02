import FeatureSection from "./FeatureSection";
import TotalBalance from "@/app/app/components/TotalBalance";

export default function DashboardFeature() {
  return (
    <FeatureSection title="Dashboard" bgColor="bg-background">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <TotalBalance />
        <TotalBalance />
        <TotalBalance />
        <TotalBalance />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <TotalBalance />
        <TotalBalance />
      </div>
    </FeatureSection>
  );
}
