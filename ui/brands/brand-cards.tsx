import { fetchFilteredBrands } from "@/lib/data";
import Link from "next/link";
import BrandCard from "./brand-card";

export default async function BrandCards({ query }: { query: string }) {
  const brands = await fetchFilteredBrands(query);
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {brands?.map((brand) => (
        <Link
          key={brand.id}
          href={`/brands/${brand.slug}`}
          className="font-medium"
        >
          <BrandCard brand={brand} />
        </Link>
      ))}
    </div>
  );
}
