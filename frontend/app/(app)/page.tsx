import { Button } from "@/ui/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Välkommen till Bilsök</h1>
      <Button asChild>
        <Link href="/cars">Visa alla bilar</Link>
      </Button>
      <Button asChild>
        <Link href="/brands">Visa alla bilmärken</Link>
      </Button>
    </div>
  );
}
