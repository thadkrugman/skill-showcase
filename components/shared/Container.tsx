import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col flex-1 mx-1 px-4 lg:px-6 py-6 lg:py-8 border-x border-dashed",
        className,
      )}
    >
      {children}
    </div>
  );
}
