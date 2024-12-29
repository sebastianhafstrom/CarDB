import { fetchFilteredCarModels } from "@/lib/data";
import { BodyType, FuelType } from "@prisma/client";
import Link from "next/link";
import CarCard from "./car-card";

export default async function CarCards({
  brandSlugs,
  query,
  fuelTypes,
  bodyTypes,
}: {
  brandSlugs: string[];
  query: string;
  fuelTypes: FuelType[];
  bodyTypes: BodyType[];
}) {
  const cars = await fetchFilteredCarModels({
    brandSlugs,
    query,
    fuelTypes,
    bodyTypes,
  });
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {cars?.map((car) => (
        <Link key={car.id} href={`/cars/${car.slug}`} className="font-medium">
          <CarCard car={car} />
        </Link>
      ))}
    </div>
  );
}
