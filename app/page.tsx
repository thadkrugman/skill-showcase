import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <p className="text-7xl font-bold text-purple-500">Home Page</p>
      <Button asChild variant={"default"} className="w-fit">
        <Link href={"/about"}>Go to about page</Link>
      </Button>
    </Container>
  );
}
