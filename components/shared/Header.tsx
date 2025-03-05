import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import ModeToggle from "@/components/shared/mode-toggle";
import Link from "next/link";
import Container from "@/components/shared/container";
import { Button } from "../ui/button";

export default async function Header() {
  const { userId } = await auth();
  const navItems = [
    { title: "Dashboard", path: "/app" },
    { title: "Total Balance", path: "/app/total-balance" },
    { title: "Income Tracker", path: "/app/income-tracker" },
    { title: "Monthly Spending", path: "/app/monthly-spending" },
    { title: "Savings Progress", path: "/app/savings-progress" },
  ];
  const homeLink = userId ? "/app" : "/";

  return (
    <Container
      tag="header"
      borderBottom={true}
      className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex h-14 w-full flex-row items-center justify-between py-0 backdrop-blur"
    >
      <div className="flex h-full flex-row items-center">
        <Link href={homeLink} className="mr-6 text-base font-bold">
          SkillShowcase
        </Link>
        <SignedIn>
          <nav>
            <ul className="text-foreground/80 flex flex-row items-center gap-6 text-sm">
              {navItems.map((item, idx) => (
                <Link key={idx} href={item.path}>
                  {item.title}
                </Link>
              ))}
            </ul>
          </nav>
        </SignedIn>
      </div>
      <div className="flex flex-row items-center gap-4">
        <ModeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button variant="outline" size="sm" className="text-xs" asChild>
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </Container>
  );
}
