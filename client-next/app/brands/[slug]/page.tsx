"use client";
import { fetcher } from "@/api";
import { DataTable } from "@/components/ui/data-table";
import { brand, car } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function BrandPage() {
  const { slug } = useParams();

  const { data: brand } = useSWR<brand>(`/brands/${slug}`, fetcher);

  // Fetch the car brand data based on the slug

  if (brand) {
    return (
      <>
        <h1 className="text-4xl font-bold">{brand.name}</h1>
        <div>{brand.country}</div>
        <div>
          <a href={brand.website} target="_blank" rel="noreferrer">
            {brand.website}
          </a>
        </div>

        <h2 className="mt-4 text-3xl font-bold pb-4">Models</h2>
        <DataTable columns={columns} data={brand.models} />
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
    accessorKey: "bodyType",
    header: "Body Type",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
];
