import BodyTypesFilter from "@/ui/body-types-filter";
import BrandsFilter from "@/ui/brands-filter";
import CarCards from "@/ui/cars/car-cards";
import FuelTypesFilter from "@/ui/fuel-types-filter";
import Search from "@/ui/search";
import { BodyType, FuelType } from "@prisma/client";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    fuelTypes?: string | string[];
    bodyTypes?: string | string[];
    brands?: string | string[];
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  // Split the brands query parameter into an array
  if (typeof searchParams?.brands === "string") {
    searchParams.brands = [searchParams.brands];
  }
  const brands = searchParams?.brands || [];

  // Split the fuelTypes and bodyTypes query parameters into arrays
  if (typeof searchParams?.fuelTypes === "string") {
    searchParams.fuelTypes = [searchParams.fuelTypes];
  }
  const fuelTypes: FuelType[] =
    searchParams?.fuelTypes?.flatMap(
      (fuelTypeString) =>
        FuelType[fuelTypeString.toUpperCase() as keyof typeof FuelType]
    ) || [];

  if (typeof searchParams?.bodyTypes === "string") {
    searchParams.bodyTypes = [searchParams.bodyTypes];
  }
  const bodyTypes: BodyType[] =
    searchParams?.bodyTypes?.flatMap(
      (bodyTypeString) =>
        BodyType[bodyTypeString.toUpperCase() as keyof typeof BodyType]
    ) || [];

  return (
    <>
      <h1 className="text-4xl font-bold mb-5">Bilar</h1>
      <div className="flex gap-2 flex-col md:flex-row">
        <Search placeholder="Sök..." />
        <FuelTypesFilter />
        <BodyTypesFilter />
        <BrandsFilter />
      </div>

      <CarCards
        brandSlugs={brands}
        query={query}
        fuelTypes={fuelTypes}
        bodyTypes={bodyTypes}
      />
    </>
  );
}
