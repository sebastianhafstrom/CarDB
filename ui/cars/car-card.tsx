import { fetchCarBrandById, fetchUniqueFuelTypes } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/components/card";
import { BodyType, CarModel, FuelType } from "@prisma/client";

const carDetails: Record<BodyType, string> = {
  SEDAN: "Sedan",
  SUV: "SUV",
  CROSSOVER: "CUV",
  HATCHBACK: "Halvkombi",
  COUPE: "Kupé",
  CONVERTIBLE: "Cabriolet",
  WAGON: "Kombi",
  PICKUP: "Pickup",
  VAN: "Skåpbil",
  CABRIOLET: "Cabriolet",
};

const fuelTypeLabels: Record<FuelType, string> = {
  PETROL: "Bensin",
  DIESEL: "Diesel",
  ELECTRIC: "El",
  HYBRID: "Hybrid",
  PHEV: "Plugin hybrid",
};

export default async function CarCard({ car }: { car: CarModel }) {
  const [brand, fuelTypes] = await Promise.all([
    fetchCarBrandById(car.brandId),
    fetchUniqueFuelTypes(car.id),
  ]);

  return (
    <Card className="overflow-hidden h-70" x-chunk="dashboard-07-chunk-4">
      <CardContent>
        <img
          src={car.imageUrl}
          alt="Image"
          className="rounded-md object-cover h-48 w-full"
        />
      </CardContent>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <span>{car.name}</span>
            <span>{brand.name}</span>
          </div>
        </CardTitle>
        <CardDescription>
          {carDetails[car.bodyType]}
          <div>
            {fuelTypes.map((fuelType, index) =>
              index === fuelTypes.length - 1
                ? fuelTypeLabels[fuelType]
                : fuelTypeLabels[fuelType] + " | "
            )}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
