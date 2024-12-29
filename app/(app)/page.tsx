import { Button } from "@/ui/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Välkommen till Bilsök</h1>

      <div className="mt-4 flex gap-4">
        <Button asChild>
          <Link href="/cars">Visa alla bilar</Link>
        </Button>
        <Button asChild>
          <Link href="/brands">Visa alla bilmärken</Link>
        </Button>
      </div>
    </>
  );
}
