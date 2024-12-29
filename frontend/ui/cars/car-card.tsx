import { fetchCarBrandById, fetchUniqueFuelTypes } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/components/card";
import { CarModel } from "@prisma/client";

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
          {brand.name} {car.name}
        </CardTitle>
        <CardDescription>
          {car.bodyType}
          <div>
            {fuelTypes.map((fuelType, index) =>
              index === fuelTypes.length - 1 ? fuelType : fuelType + " | "
            )}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
