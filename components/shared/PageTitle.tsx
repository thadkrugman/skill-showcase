import { Button } from "../ui/button";
import Container from "./Container";
import Link from "next/link";
interface Props {
  title: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function PageTitle({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: Props) {
  return (
    <Container
      tag="section"
      className="items-start gap-1 py-8 md:py-10 lg:py-12"
      borderBottom={true}
    >
      <h1 className="text-3xl leading-tight font-bold tracking-tighter md:text-4xl lg:leading-[1.1]">
        {title}
      </h1>
      {description && (
        <p className="text-foreground max-w-2xl text-lg font-light text-balance">
          {description}
        </p>
      )}
      {primaryButtonText && primaryButtonLink && (
        <div className="flex flex-row gap-2 pt-2">
          <Button variant="default" size="sm" className="text-xs" asChild>
            <Link href={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          {secondaryButtonText && secondaryButtonLink && (
            <Button variant="ghost" size="sm" className="text-xs" asChild>
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      )}
    </Container>
  );
}
