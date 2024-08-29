import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Button asChild>
        <Link href="/cars">View all cars</Link>
      </Button>
      <Button asChild>
        <Link href="/brands">View all brands</Link>
      </Button>
    </div>
  );
}
