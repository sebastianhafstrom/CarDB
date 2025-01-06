import { fetchCarBrandBySlug } from "@/lib/data";
import { brandMeta } from "@/types/types";
import BodyTypesFilter from "@/ui/body-types-filter";
import CarCards from "@/ui/cars/car-cards";
import { Button } from "@/ui/components/button";
import FuelTypesFilter from "@/ui/fuel-types-filter";
import Search from "@/ui/search";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { BodyType, FuelType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{
    query?: string;
    fuelTypes?: string | string[];
    bodyTypes?: string | string[];
  }>;
}) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  // Split the fuelTypes and bodyTypes query parameters into arrays
  if (typeof searchParams?.fuelTypes === "string") {
    searchParams.fuelTypes = searchParams.fuelTypes.split(",");
  }
  const fuelTypes: FuelType[] =
    searchParams?.fuelTypes?.flatMap(
      (fuelTypeString) =>
        FuelType[fuelTypeString.toUpperCase() as keyof typeof FuelType]
    ) || [];

  if (typeof searchParams?.bodyTypes === "string") {
    searchParams.bodyTypes = searchParams.bodyTypes.split(",");
  }
  const bodyTypes: BodyType[] =
    searchParams?.bodyTypes?.flatMap(
      (bodyTypeString) =>
        BodyType[bodyTypeString.toUpperCase() as keyof typeof BodyType]
    ) || [];

  const brand = await fetchCarBrandBySlug(slug as string);

  if (!brand) {
    notFound();
  }

  const meta = brandMeta[brand.country];

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold">{brand.name}</h1>
          <span className="text-4xl">{meta.flag}</span>
          <Button asChild className="ml-8">
            <Link href={brand.website} className="flex items-center gap-2">
              <span>
                {new URL(brand.website).hostname.replace(/^www\./, "")}
              </span>
              <ArrowTopRightOnSquareIcon className="h-5" />
            </Link>
          </Button>
        </div>
        <Image src={brand.logoUrl} alt="Image" width={300} height={200} />
      </div>

      <h2 className="text-2xl">Bilar</h2>
      <div className="flex justify-between gap-2 mt-4">
        <Search placeholder="Sök..." />
        <FuelTypesFilter />
        <BodyTypesFilter />
      </div>

      <CarCards
        brandSlugs={[brand.slug]}
        query={query}
        fuelTypes={fuelTypes}
        bodyTypes={bodyTypes}
      />
    </>
  );
}
