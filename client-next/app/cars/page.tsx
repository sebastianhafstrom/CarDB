"use client";
import { getCarModels } from "@/api";
import CarCard from "@/components/car-card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { BodyType, car } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useEffect, useState } from "react";

const bodyTypeLabels: { value: string; label: string }[] = [
  { value: BodyType.SEDAN, label: "Sedan" },
  { value: BodyType.SUV, label: "SUV" },
  { value: BodyType.CROSSOVER, label: "Crossover" },
  { value: BodyType.HATCHBACK, label: "Hatchback" },
  { value: BodyType.WAGON, label: "Wagon" },
  { value: BodyType.COUPE, label: "Coupé" },
  { value: BodyType.CONVERTIBLE, label: "Convertible" },
  { value: BodyType.PICKUP, label: "Pickup" },
  { value: BodyType.VAN, label: "Van" },
  { value: BodyType.CABRIOLET, label: "Cabriolet" },
];

export default function Page() {
  const [cars, setCars] = useState<car[] | null>(null);
  const [bodyTypesFilter, setBodyTypesFilter] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  const fetchCars = async () => {
    const response = await getCarModels(search, bodyTypesFilter);
    setCars(response);
  };

  useEffect(() => {
    fetchCars();
  }, [search, bodyTypesFilter]);

  if (cars) {
    return (
      <>
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl font-bold">Cars ({cars.length})</h1>
        </div>
        <div className="flex justify-between mb-5">
          <Input
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
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

        <DataTable columns={columns} data={cars} />
      </>
    );
  }
}

const columns: ColumnDef<car>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <Link href={`/cars/${row.original.slug}`} className="font-medium">
          {row.original.name}
        </Link>
      );
    },
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => {
      return (
        <Link
          href={`/brands/${row.original.brand.slug}`}
          className="font-medium"
        >
          {row.original.brand.name}
        </Link>
      );
    },
  },
  {
    accessorKey: "bodyType",
    header: "Body Type",
  },
];
