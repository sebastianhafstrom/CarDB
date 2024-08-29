"use client";
import { fetcher } from "@/api";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { car } from "@/types/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function CarPage() {
  const { slug } = useParams();

  const { data: car } = useSWR<car>(`/models/${slug}`, fetcher);

  // Fetch the car brand data based on the slug

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
        <div>
          <a href={car.website} target="_blank" rel="noreferrer">
            Website
          </a>
        </div>
      </>
    );
  }
}
