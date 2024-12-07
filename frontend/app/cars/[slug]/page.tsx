"use client";
import { getCarModel } from "@/api";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold pb-4">
            {car.brand.name + " " + car.name}
          </h1>
          <div>Body: {car.bodyType}</div>
          <div>
            Brand:{" "}
            <Link href={`/brands/${car.brand.slug}`}>{car.brand.name}</Link>
          </div>
          <a href={car.website} target="_blank" rel="noreferrer">
            Website
          </a>
        </div>
        <div className="flex justify-between">
          <div className="w-full">
            <AspectRatio ratio={16 / 9}>
              <img
                src={car.imageUrl}
                alt="Image"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="mb-4">
          <h2>Car rating</h2>
          <p>
            Rating:{" "}
            {car.userReviews.reduce((sum, review) => sum + review.rating, 0) /
              car.userReviews.length}
          </p>
        </div>
        <div className="mb-4">
          <h2>Variants</h2>
          <ul>
            {car.variants.map((variant) => (
              <li className="mb-2" key={variant.id}>
                <h3>{variant.name}</h3>
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
        <div className="mb-4">
          <h2>User reviews</h2>
          <ul>
            {car.userReviews.map((review) => (
              <li key={review.id}>
                <h3>{review.title}</h3>
                <p>{review.content}</p>
                <p>Rating: {review.rating}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2>Professional reviews</h2>
          <ul>
            {car.professionalReviews.map((review) => (
              <li key={review.id}>
                <h3>{review.title}</h3>
                <a href={review.website} target="_blank" rel="noreferrer">
                  To review website
                </a>
                <p>{review.content}</p>
                <p>Rating: {review.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
