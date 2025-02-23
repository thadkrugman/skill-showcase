import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import Container from "@/components/shared/Container";
import Link from "next/link";

export default function Header() {
  const navItems = [{ title: "Home", path: "/" }];

  return (
    <header className="flex sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container
        className="py-0 md:py-0 lg:py-0 flex-row items-center justify-between h-14"
        borderBottom
      >
        <div className="flex flex-row items-center h-full">
          <Link href={"/"} className="text-base font-bold mr-6">
            SkillShowcase
          </Link>
          <SignedIn>
            <nav>
              <ul className="flex flex-row items-center gap-6 text-sm text-foreground/80">
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
            <SignInButton />
          </SignedOut>
        </div>
      </Container>
    </header>
  );
}
