"use client";
import { fetcher } from "@/api";
import { DataTable } from "@/components/ui/data-table";
import { brand } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import useSWR from "swr";

export default function Page() {
  const {
    data: brands,
    error,
    isLoading,
  } = useSWR<brand[]>("/brands", fetcher);

  if (brands) {
    return (
      <>
        <div className="flex justify-between mb-2">
          <h1 className="text-4xl font-bold">Brands</h1>
        </div>
        <DataTable columns={columns} data={brands} />
      </>
    );
  }
}

const columns: ColumnDef<brand>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <Link
          href={`/brands/${row.getValue<string>("slug")}`}
          className="font-medium"
        >
          {row.getValue<string>("name")}
        </Link>
      );
    },
  },
  {
    accessorKey: "country",
    header: "Origin Country",
  },
  {
    accessorKey: "website",
    header: "Website",
    cell: ({ row }) => {
      return (
        <a
          href={row.getValue<string>("website")}
          target="_blank"
          rel="noreferrer"
        >
          {row.getValue<string>("website")}
        </a>
      );
    },
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
];
