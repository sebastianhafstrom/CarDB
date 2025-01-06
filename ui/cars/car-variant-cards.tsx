import { fetchCarVariantsByModelId } from "@/lib/data";
import CarVariantCard from "./car-variant-card";

export default async function CarVariantCards({
  modelId,
}: {
  modelId: string;
}) {
  const variants = await fetchCarVariantsByModelId(modelId);
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {variants?.map((variant) => (
        <CarVariantCard variant={variant} />
      ))}
    </div>
  );
}
