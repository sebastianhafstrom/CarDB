import { fetchCarBrandBySlug } from "@/lib/data";
import BodyTypesFilter from "@/ui/body-types-filter";
import CarCards from "@/ui/cars/car-cards";
import FuelTypesFilter from "@/ui/fuel-types-filter";
import Search from "@/ui/search";
import { BodyType, FuelType } from "@prisma/client";
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

  return (
    <>
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold">{brand.name}</h1>
        <div>{brand.country}</div>
        <a href={brand.website} target="_blank" rel="noreferrer">
          {brand.website}
        </a>
      </div>

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
