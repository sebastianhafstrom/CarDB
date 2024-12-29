"use client";
import { Button } from "@/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/ui/components/dropdown-menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const brandLabels = [
  { value: "volvo", label: "Volvo" },
  { value: "volkswagen", label: "Volkswagen" },
  { value: "bmw", label: "BMW" },
  { value: "audi", label: "Audi" },
  { value: "mercedes-benz", label: "Mercedes Benz" },
  { value: "toyota", label: "Toyota" },
  { value: "ford", label: "Ford" },
  { value: "peugeot", label: "Peugeot" },
  { value: "renault", label: "Renault" },
  { value: "skoda", label: "Skoda" },
  { value: "kia", label: "Kia" },
];

export default function BrandsFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilterChange = (brandSlug: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      params.append("brands", brandSlug); // Add a new `brands` value
    } else {
      const brands = params.getAll("brands");
      params.delete("brands"); // Clear all `brands`
      brands
        .filter((brand) => brand !== brandSlug) // Remove the unchecked brandSlug
        .forEach((brand) => params.append("brands", brand)); // Add back remaining values
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Bilmärken</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        {brandLabels.map(({ value, label }) => {
          return (
            <DropdownMenuCheckboxItem
              key={value}
              checked={
                searchParams.has("brands") &&
                searchParams.getAll("brands").includes(value)
              }
              onCheckedChange={(checked: boolean) =>
                handleFilterChange(value, checked)
              }
            >
              {label}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
