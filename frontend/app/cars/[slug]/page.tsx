"use client";
import { getCarModel } from "@/api";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { car } from "@/types/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CarPage() {
  const { slug } = useParams();

  const [car, setCar] = useState<car | null>(null);

  const fetchCar = async () => {
    const response = await getCarModel(slug as string);
    setCar(response);
  };

  useEffect(() => {
    fetchCar();
  }, [slug]);

  if (car) {
    return (
      <>
        <div className="flex flex-col-reverse md:flex-row justify-between gap-4">
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-start">
            <h1 className="text-4xl font-bold pb-4">
              {car.brand.name + " " + car.name}
            </h1>
            <div>Body: {car.bodyType}</div>
            <div>
              Brand:{" "}
              <Link href={`/brands/${car.brand.slug}`}>{car.brand.name}</Link>
            </div>
            <Button asChild>
              <Link href={car.website}>
                {car.brand.name + " " + car.name} på{" "}
                {new URL(car.website).hostname.replace(/^www\./, "")}
              </Link>
            </Button>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Dimensions</h2>
              <div>Length: {car.length} mm</div>
              <div>Width: {car.width} mm</div>
              <div>Height: {car.height} mm</div>
              <div>Wheelbase: {car.wheelbase} mm</div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <AspectRatio ratio={16 / 9}>
              <img
                src={car.imageUrl}
                alt="Image"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>

        <div className="flex">
          <div className="mb-4 w-1/2">
            <h2 className="text-2xl font-bold">Variants</h2>
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
            <h2 className="text-2xl font-bold">Professional reviews</h2>
            <ul>
              {car.professionalReviews.map((review) => (
                <li key={review.id}>
                  <a href={review.website} target="_blank" rel="noreferrer">
                    <h3>
                      {review.title} (Rating: {review.rating})
                    </h3>
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
