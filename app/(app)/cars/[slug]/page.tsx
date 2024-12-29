import { fetchCarModelBySlug } from "@/lib/data";
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
              {car.brand.name + " " + car.name}
            </h1>
            <div>Kaross: {car.bodyType}</div>
            <div>
              Märke:{" "}
              <Link href={`/brands/${car.brand.slug}`}>{car.brand.name}</Link>
            </div>
            <Button asChild>
              <Link href={car.website}>
                {car.brand.name + " " + car.name} på{" "}
                {new URL(car.website).hostname.replace(/^www\./, "")}
              </Link>
            </Button>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Dimensioner</h2>
              <div>Längd: {car.length} mm</div>
              <div>Bredd: {car.width} mm</div>
              <div>Höjd: {car.height} mm</div>
              <div>Hjulbas: {car.wheelbase} mm</div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={car.imageUrl}
              alt="Image"
              className="rounded-md object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>

        <div className="flex">
          <div className="mb-4 w-1/2">
            <h2 className="text-2xl font-bold">Varianter</h2>
            <ul>
              {car.variants.map((variant) => (
                <li className="mb-2" key={variant.id}>
                  <h3 className="text-xl">{variant.name}</h3>
                  <ul>
                    {variant.engines.map((engine) => (
                      <li key={engine.id}>
                        {engine.name} - {engine.fuelType} - {engine.power} hp
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 w-1/2">
            <h2 className="text-2xl font-bold">Recensioner</h2>
            <ul>
              {car.professionalReviews.map((review) => (
                <li key={review.id}>
                  <a href={review.website} target="_blank" rel="noreferrer">
                    <h3>{review.title}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
