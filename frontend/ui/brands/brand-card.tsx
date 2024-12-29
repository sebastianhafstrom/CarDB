import { fetchCarModelsCount } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/components/card";
import { CarBrand } from "@prisma/client";

export default function CarCard({ brand }: { brand: CarBrand }) {
  const carCount = fetchCarModelsCount(brand.id);

  return (
    <Card className="overflow-hidden h-70" x-chunk="dashboard-07-chunk-4">
      <CardContent>
        <img
          src={brand.logoUrl}
          alt="Image"
          className="rounded-md object-cover h-48 w-full"
        />
      </CardContent>
      <CardHeader>
        <CardTitle>{brand.name}</CardTitle>
        <CardDescription>
          <p>Antal bilar: {carCount}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
