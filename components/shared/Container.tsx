import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children?: ReactNode;
  tag?: "div" | "section" | "article" | "header" | "footer";
  className?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  flex1?: boolean;
}

export default function Container({
  children,
  tag = "div",
  className,
  borderTop = false,
  borderBottom = false,
  flex1 = false,
}: Props) {
  const Tag = tag as ElementType;

  return (
    <Tag
      className={`${borderTop && "border-t"} ${borderBottom && "border-b"} ${flex1 && "flex-1"} flex w-full flex-col items-center border-dashed`}
    >
      <div
        className={`${flex1 && "flex-1"} flex h-full w-full flex-col items-center px-2`}
      >
        <div
          className={cn(
            `${flex1 && "flex-1"} flex h-full w-full max-w-screen-2xl flex-col border-dashed px-4 py-6 md:border-x xl:px-6`,
            className,
          )}
        >
          {children || null}
        </div>
      </div>
    </Tag>
  );
}
