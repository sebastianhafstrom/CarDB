import { fetchSimilarCarModels } from "@/lib/data";
import Link from "next/link";
import CarCard from "./car-card";

export default async function SimilarCarsCards({
  modelId,
}: {
  modelId: string;
}) {
  const cars = await fetchSimilarCarModels(modelId);
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
