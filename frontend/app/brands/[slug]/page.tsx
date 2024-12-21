"use client";
import { getBrand, getCarModels } from "@/api";
import CarCard from "@/components/car-card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { bodyTypeLabels, brand, car, fuelTypeLabels } from "@/types/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BrandPage() {
  const { slug } = useParams();

  const [brand, setBrand] = useState<brand | null>(null);

  const fetchBrand = async () => {
    const response = await getBrand(slug as string);
    setBrand(response);
  };

  const [cars, setCars] = useState<car[] | null>(null);
  const [bodyTypesFilter, setBodyTypesFilter] = useState<string[]>([]);
  const [fuelTypesFilter, setFuelTypesFilter] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  const fetchCars = async () => {
    const response = await getCarModels({
      search,
      bodyTypes: bodyTypesFilter,
      brands: [slug as string],
      fuelTypes: fuelTypesFilter,
    });
    setCars(response);
  };

  useEffect(() => {
    fetchCars();
  }, [search, bodyTypesFilter, fuelTypesFilter]);

  useEffect(() => {
    fetchBrand();
    fetchCars();
  }, [slug]);

  if (brand) {
    return (
      <>
        <h1 className="text-4xl font-bold">{brand.name}</h1>
        <div>{brand.country}</div>
        <div>
          <a href={brand.website} target="_blank" rel="noreferrer">
            {brand.website}
          </a>
        </div>
        <div className="flex justify-between mt-4">
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
        </div>

        {cars === null && <div className="mt-4">Loading...</div>}
        {cars !== null && cars.length === 0 && (
          <div className="mt-4">No cars found</div>
        )}
        {cars !== null && cars.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mt-4">
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
}
