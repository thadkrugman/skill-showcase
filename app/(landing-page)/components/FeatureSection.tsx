import { ReactNode } from "react";

interface FeatureSectionProps {
  title: string;
  bgColor: string;
  children?: ReactNode;
}

export default function FeatureSection({
  title,
  bgColor,
  children,
}: FeatureSectionProps) {
  return (
    <div
      className={`${bgColor} flex w-full flex-col gap-6 rounded-lg border p-6`}
    >
      <h2 className="text-xl font-bold text-white md:text-2xl">{title}</h2>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}
