import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import Container from "@/components/shared/Container";

export default function Header() {
  return (
    <header className="flex h-14 border-b border-dashed">
      <Container className="py-0 lg:py-0 flex-row items-center justify-between">
        <div>
          <nav className=""></nav>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
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
