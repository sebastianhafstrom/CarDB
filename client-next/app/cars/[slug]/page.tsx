"use client";
import { fetcher } from "@/api";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DataTable } from "@/components/ui/data-table";
import { car, carGeneration } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function CarPage() {
  const { slug } = useParams();

  const { data: car } = useSWR<car>(`/models/${slug}`, fetcher);

  // Fetch the car brand data based on the slug

  if (car) {
    return (
      <>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold pb-4">
            {car.brand.name + " " + car.name}
          </h1>
          <div>Body: {car.bodyType}</div>
          <div>
            Brand:{" "}
            <Link href={`/brands/${car.brand.slug}`}>{car.brand.name}</Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full">
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://cdn.skoda-auto.com/images/sites/encom-v2/42d75df7-28d9-4884-80a5-ffd443ab4d95/b6cff1adbe10b16b045ab54798583602/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp"
                alt="Image"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>

        <div className="flex justify-between mb-2">
          <h2 className="text-3xl font-bold pb-4">Generations</h2>
        </div>

        <DataTable columns={columns} data={car.generations} />
      </>
    );
  }
}

const columns: ColumnDef<carGeneration>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  { accessorKey: "startYear", header: "Start Year" },
  { accessorKey: "endYear", header: "End Year" },
  {
    accessorKey: "length",
    header: "Length (mm)",
  },
  {
    accessorKey: "width",
    header: "Width (mm)",
  },
  {
    accessorKey: "height",
    header: "Height (mm)",
  },
];
