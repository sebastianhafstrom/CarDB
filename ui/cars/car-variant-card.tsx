import { fetchEnginesByVariantId } from "@/lib/data";
import { fuelTypeLabels } from "@/types/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/components/card";
import { CarVariant } from "@prisma/client";

export default async function CarVariantCard({
  variant,
}: {
  variant: CarVariant;
}) {
  const [engines] = await Promise.all([fetchEnginesByVariantId(variant.id)]);

  return (
    <Card className="overflow-hidden h-70" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <CardTitle>
          <div>{variant.name}</div>
        </CardTitle>
        <CardDescription>
          <div className="text-xl">Motorer</div>
          {engines.map((engine) => (
            <div key={engine.id}>
              {fuelTypeLabels[engine.fuelType]} - {engine.name} {engine.power}hp
            </div>
          ))}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
