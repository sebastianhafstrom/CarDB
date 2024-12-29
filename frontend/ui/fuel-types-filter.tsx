"use client";
import { Button } from "@/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/ui/components/dropdown-menu";
import { FuelType } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const fuelTypeLabels = [
  { value: FuelType.DIESEL, label: "Diesel" },
  { value: FuelType.ELECTRIC, label: "Electric" },
  { value: FuelType.HYBRID, label: "Hybrid" },
  { value: FuelType.PETROL, label: "Petrol" },
  { value: FuelType.PHEV, label: "PHEV" },
];

export default function FuelTypesFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilterChange = (fuelType: FuelType, checked: boolean) => {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      params.append("fuelTypes", fuelType); // Add a new `fuelTypes` value
    } else {
      const fuelTypes = params.getAll("fuelTypes");
      params.delete("fuelTypes"); // Clear all `fuelTypes`
      fuelTypes
        .filter((type) => type !== fuelType) // Remove the unchecked fuelType
        .forEach((type) => params.append("fuelTypes", type)); // Add back remaining values
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Drivmedel</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        {fuelTypeLabels.map(({ value, label }) => {
          return (
            <DropdownMenuCheckboxItem
              key={value}
              checked={
                searchParams.has("fuelTypes") &&
                searchParams.getAll("fuelTypes").includes(value)
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
