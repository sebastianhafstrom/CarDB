import { carGeneration } from "@/api/apiTypes";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ColumnDef } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchCarBySlug, fetchCarGenerations } from "../api/api";

export const Route = createFileRoute("/cars/$carSlug")({
  component: Brand,
  loader: ({ params: { carSlug } }) => fetchCarBySlug(carSlug),
  errorComponent: () => {
    // Render an error message
    return <h1>Error:</h1>;
  },
});

function Brand() {
  const car = Route.useLoaderData();
  const [generations, setGenerations] = useState<carGeneration[]>([]);

  const fetchGenerations = async () => {
    const response = await fetchCarGenerations(car.slug);
    setGenerations(response);
  };

  useEffect(() => {
    fetchGenerations();
  }, []);

  if (car) {
    return (
      <>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold pb-4">
            {car.brand.name + " " + car.name}
          </h1>
          <div>Body: {car.body_type}</div>
          <div>
            Brand:{" "}
            <Link
              to="/brands/$brandSlug"
              params={{ brandSlug: car.brand.slug }}
            >
              {car.brand.name}
            </Link>
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

          <Button asChild>
            <Link
              to="/cars/$carSlug/generations/new"
              params={{ carSlug: car.slug }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add new generation
            </Link>
          </Button>
        </div>

        <DataTable columns={columns} data={generations} />
      </>
    );
  }
}

const columns: ColumnDef<carGeneration>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "length_mm",
    header: "Length",
  },
  {
    accessorKey: "width_mm",
    header: "Width",
  },
  {
    accessorKey: "height_mm",
    header: "Height",
  },
];
