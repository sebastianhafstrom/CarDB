"use client";
import { getBrands } from "@/api";
import { DataTable } from "@/components/ui/data-table";
import { brand } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [brands, setBrands] = useState<brand[] | null>(null);

  const fetchBrands = async () => {
    const response = await getBrands();
    setBrands(response);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <>
      <div className="flex justify-between mb-2">
        <h1 className="text-4xl font-bold">Brands</h1>
      </div>
      {brands === null && <div>Loading...</div>}
      {brands != null && brands.length === 0 && <div>No brands found</div>}
      {brands != null && brands.length > 0 && (
        <DataTable columns={columns} data={brands} />
      )}
    </>
  );
}

const columns: ColumnDef<brand>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <Link href={`/brands/${row.original.slug}`} className="font-medium">
          {row.original.name}
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
        <a href={row.original.website} target="_blank" rel="noreferrer">
          {row.original.website}
        </a>
      );
    },
  },
];
