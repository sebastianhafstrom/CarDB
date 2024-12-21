import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { bodyTypeText, car } from "@/types/types";

export default function CarCard({ car }: { car: car }) {
  const fuelTypes = car.variants.flatMap((variant) =>
    variant.engines.map((engine) => engine.fuelType)
  );

  // Get unique fuel types
  const uniqueFuelTypes = Array.from(new Set(fuelTypes));

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
          {car.brand.name} {car.name}
        </CardTitle>
        <CardDescription>
          {bodyTypeText(car.bodyType)}
          {car.variants && (
            <div>
              {uniqueFuelTypes.map((fuelType, index) =>
                index === uniqueFuelTypes.length - 1
                  ? fuelType
                  : fuelType + " | "
              )}
            </div>
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
