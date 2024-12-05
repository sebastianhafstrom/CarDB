import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { bodyTypeText, car } from "@/types/types";

export default function CarCard({ car }: { car: car }) {
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
        <CardDescription>{bodyTypeText(car.bodyType)}</CardDescription>
      </CardHeader>
    </Card>
  );
}
