import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="text-7xl font-bold text-pink-500">Home Page</p>
      <Button asChild variant={"default"}>
        <Link href={"/about"}>Go to about page</Link>
      </Button>
    </div>
  );
}
