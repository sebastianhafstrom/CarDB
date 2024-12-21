"use client";
import { getCarModels } from "@/api";
import CarCard from "@/components/car-card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  bodyTypeLabels,
  brandLabels,
  car,
  fuelTypeLabels,
} from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [cars, setCars] = useState<car[] | null>(null);
  const [bodyTypesFilter, setBodyTypesFilter] = useState<string[]>([]);
  const [brandsFilter, setBrandsFilter] = useState<string[]>([]);
  const [fuelTypesFilter, setFuelTypesFilter] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  const fetchCars = async () => {
    const response = await getCarModels({
      search,
      bodyTypes: bodyTypesFilter,
      brands: brandsFilter,
      fuelTypes: fuelTypesFilter,
    });
    setCars(response);
  };

  useEffect(() => {
    fetchCars();
  }, [search, bodyTypesFilter, brandsFilter, fuelTypesFilter]);

  return (
    <>
      <div className="flex justify-between mb-5">
        <h1 className="text-4xl font-bold">Cars</h1>
      </div>
      <div className="flex gap-2 mb-5">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Fuel types</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            {fuelTypeLabels.map(({ value, label }) => {
              return (
                <DropdownMenuCheckboxItem
                  key={value}
                  checked={fuelTypesFilter.includes(value)}
                  onCheckedChange={(checked) => {
                    setFuelTypesFilter((prev) =>
                      checked
                        ? [...prev, value]
                        : prev.filter((x) => x !== value)
                    );
                  }}
                >
                  {label}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Body types</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            {bodyTypeLabels.map(({ value, label }) => {
              return (
                <DropdownMenuCheckboxItem
                  key={value}
                  checked={bodyTypesFilter.includes(value)}
                  onCheckedChange={(checked) => {
                    setBodyTypesFilter((prev) =>
                      checked
                        ? [...prev, value]
                        : prev.filter((x) => x !== value)
                    );
                  }}
                >
                  {label}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Brands</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            {brandLabels.map(({ value, label }) => {
              return (
                <DropdownMenuCheckboxItem
                  key={value}
                  checked={brandsFilter.includes(value)}
                  onCheckedChange={(checked) => {
                    setBrandsFilter((prev) =>
                      checked
                        ? [...prev, value]
                        : prev.filter((x) => x !== value)
                    );
                  }}
                >
                  {label}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {cars === null && <div>Loading...</div>}
      {cars !== null && cars.length === 0 && <div>No cars found</div>}
      {cars !== null && cars.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {cars.map((car) => (
            <Link
              key={car.id}
              href={`/cars/${car.slug}`}
              className="font-medium"
            >
              <CarCard car={car} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
