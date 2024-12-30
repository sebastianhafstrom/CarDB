"use client";
import { Button } from "@/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/ui/components/dropdown-menu";
import { BodyType } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const bodyTypeLabels = [
  { value: BodyType.SEDAN, label: "Sedan" },
  { value: BodyType.SUV, label: "SUV" },
  { value: BodyType.CROSSOVER, label: "CUV" },
  { value: BodyType.HATCHBACK, label: "Halvkombi" },
  { value: BodyType.WAGON, label: "Kombi" },
  { value: BodyType.COUPE, label: "Coupe" },
  { value: BodyType.CONVERTIBLE, label: "Convertible" },
  { value: BodyType.PICKUP, label: "Pickup" },
  { value: BodyType.VAN, label: "Skåpbil" },
  { value: BodyType.CABRIOLET, label: "Cabriolet" },
];

export default function BodyTypesFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilterChange = (bodyType: BodyType, checked: boolean) => {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      params.append("bodyTypes", bodyType); // Add a new `bodyTypes` value
    } else {
      const bodyTypes = params.getAll("bodyTypes");
      params.delete("bodyTypes"); // Clear all `bodyTypes`
      bodyTypes
        .filter((type) => type !== bodyType) // Remove the unchecked bodyType
        .forEach((type) => params.append("bodyTypes", type)); // Add back remaining values
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Kaross</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        {bodyTypeLabels.map(({ value, label }) => {
          return (
            <DropdownMenuCheckboxItem
              key={value}
              checked={
                searchParams.has("bodyTypes") &&
                searchParams.getAll("bodyTypes").includes(value)
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
