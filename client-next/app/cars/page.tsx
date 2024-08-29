"use client";
import { fetcher } from "@/api";
import { DataTable } from "@/components/ui/data-table";
import { brand, car } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import useSWR from "swr";

export default function Page() {
  const { data: cars, error, isLoading } = useSWR<car[]>("/models", fetcher);

  if (cars) {
    return (
      <>
        <div className="flex justify-between mb-2">
          <h1 className="text-4xl font-bold">Cars</h1>
        </div>
        <DataTable columns={columns} data={cars} />
      </>
    );
  }
}

const columns: ColumnDef<car>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <Link
          href={`/cars/${row.getValue<string>("slug")}`}
          className="font-medium"
        >
          {row.getValue<string>("name")}
        </Link>
      );
    },
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => {
      return (
        <Link
          href={`/brands/${row.getValue<brand>("brand").slug}`}
          className="font-medium"
        >
          {row.getValue<brand>("brand").name}
        </Link>
      );
    },
  },
  {
    accessorKey: "bodyType",
    header: "Body Type",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
];
