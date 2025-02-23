import Container from "@/components/shared/Container";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <Container>
      <SignedOut>SignedOut</SignedOut>
      <SignedIn>SignedIn</SignedIn>
    </Container>
  );
}
