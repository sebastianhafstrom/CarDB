import { fetchCarModelBySlug } from "@/lib/data";
import { bodyTypeLabels } from "@/types/types";
import CarVariantCards from "@/ui/cars/car-variant-cards";
import SimilarCarsCards from "@/ui/cars/similar-cars-cards";
import { Button } from "@/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CarPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const car = await fetchCarModelBySlug(slug as string);

  if (!car) {
    notFound();
  }

  if (car) {
    return (
      <>
        <div className="flex flex-col-reverse md:flex-row justify-between gap-4">
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-start">
            <h1 className="text-4xl font-bold pb-4">
              {car.brand.name +
                " " +
                car.name +
                " | " +
                bodyTypeLabels[car.bodyType]}
            </h1>
            <div>
              <Link href={`/brands/${car.brand.slug}`}>
                <Image
                  src={car.brand.logoUrl}
                  alt="Image"
                  width={200}
                  height={150}
                />
              </Link>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Dimensioner</h2>
              <div>Längd: {car.length} mm</div>
              <div>Bredd: {car.width} mm</div>
              <div>Höjd: {car.height} mm</div>
              <div>Hjulbas: {car.wheelbase} mm</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-end">
            <Image
              src={car.imageUrl}
              alt="Image"
              className="rounded-md object-cover"
              width={800}
              height={600}
            />
            <Button className="mt-4" asChild>
              <Link href={car.website}>
                {"Läs mer om " + car.brand.name + " " + car.name} på{" "}
                {new URL(car.website).hostname.replace(/^www\./, "")}
              </Link>
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Varianter</h2>
        <CarVariantCards modelId={car.id} />

        <h2 className="mt-4 text-2xl font-bold">Liknande bilar</h2>
        <SimilarCarsCards modelId={car.id} />
      </>
    );
  }
}
