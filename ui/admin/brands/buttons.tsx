import { Button } from "@/ui/components/button";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function UpdateBrand({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/brands/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function CreateBrand() {
  return (
    <Button asChild>
      <Link href="/admin/brands/create">
        <span className="hidden md:block">Lägg till</span>{" "}
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    </Button>
  );
}
