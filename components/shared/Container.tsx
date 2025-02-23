import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  flex1?: boolean;
  children: ReactNode;
}

export default function Container({
  children,
  borderTop = false,
  borderBottom = false,
  flex1 = false,
  className,
}: Props) {
  return (
    <div
      className={`${borderTop && "border-t"} ${borderBottom && "border-b"} ${flex1 && "flex-1"} flex flex-col items-center w-full border-dashed`}
    >
      <div
        className={cn(
          `${flex1 && "flex-1"} max-w-screen-2xl w-full h-full flex flex-col px-4 xl:px-6 py-8 md:py-10 lg:py-12 min-[1535px]:border-x border-dashed`,
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
