"use client";
import { getBrands, getCarModelsAdmin, getUsers } from "@/api";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { brand, car, user } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "brands";

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams();
    params.set("tab", tab);
    router.push(`?${params.toString()}`);
  };

  const [brands, setBrands] = useState<brand[] | null>(null);
  const [brandsSearch, setBrandsSearch] = useState<string>("");
  const fetchBrands = async () => {
    const response = await getBrands();
    setBrands(response);
  };

  const [carModels, setCarModels] = useState<car[] | null>(null);
  const [carModelsSearch, setCarModelsSearch] = useState<string>("");
  const fetchCarModels = async () => {
    const response = await getCarModelsAdmin(carModelsSearch);
    setCarModels(response);
  };

  const [users, setUsers] = useState<user[] | null>(null);
  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("tab", currentTab);
    router.push(`?${params.toString()}`);

    fetchBrands();
    fetchCarModels();
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchCarModels();
  }, [carModelsSearch]);

  useEffect(() => {
    fetchBrands();
  }, [brandsSearch]);

  return (
    <Tabs onValueChange={handleTabChange} value={currentTab}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="brands">Bilmärken</TabsTrigger>
        <TabsTrigger value="cars">Bilar</TabsTrigger>
        <TabsTrigger value="users">Användare</TabsTrigger>
      </TabsList>
      <TabsContent value="brands">
        <>
          <h1 className="text-4xl font-bold mb-2">Bilmärken</h1>
          <div className="flex gap-4 mb-2">
            <Input
              placeholder="Search..."
              value={brandsSearch}
              onChange={(event) => setBrandsSearch(event.target.value)}
              className="sm:mb-2"
            />
            <Button asChild>
              <Link href="/admin/brands/create">Lägg till</Link>
            </Button>
          </div>
          {brands === null && <div>Loading...</div>}
          {brands != null && brands.length === 0 && <div>No brands found</div>}
          {brands != null && brands.length > 0 && (
            <DataTable columns={brandColums} data={brands} />
          )}
        </>
      </TabsContent>
      <TabsContent value="cars">
        <>
          <h1 className="text-4xl font-bold mb-2">Bilar</h1>

          <div className="flex gap-4 mb-2">
            <Input
              placeholder="Search..."
              value={carModelsSearch}
              onChange={(event) => setCarModelsSearch(event.target.value)}
              className="sm:mb-2"
            />
            <Button asChild>
              <Link href="/admin/cars/create">Lägg till</Link>
            </Button>
          </div>
          {carModels === null && <div>Loading...</div>}
          {carModels != null && carModels.length === 0 && (
            <div>No brands found</div>
          )}
          {carModels != null && carModels.length > 0 && (
            <DataTable columns={carModelColumns} data={carModels} />
          )}
        </>
      </TabsContent>
      <TabsContent value="users">
        <h1 className="text-4xl font-bold mb-2">Användare</h1>
        {users === null && <div>Loading...</div>}
        {users != null && users.length === 0 && <div>No users found</div>}
        {users != null && users.length > 0 && (
          <DataTable columns={userColumns} data={users} />
        )}
      </TabsContent>
    </Tabs>
  );
};

const brandColums: ColumnDef<brand>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "country",
    header: "Origin Country",
  },
  {
    accessorKey: "website",
    header: "Website",
  },
  {
    id: "edit",
    header: "",
    cell: ({ row }) => {
      return (
        <Button asChild>
          <Link href={`/admin/brands/${row.original.slug}`}>Redigera</Link>
        </Button>
      );
    },
  },
];

const carModelColumns: ColumnDef<car>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "brand",
    cell: ({ row }) => row.original.brand.name,
    header: "Brand",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "bodyType",
    header: "Body Type",
  },
  {
    accessorKey: "length",
    header: "Length",
  },
  {
    accessorKey: "width",
    header: "Width",
  },
  {
    accessorKey: "height",
    header: "Height",
  },
  {
    accessorKey: "wheelbase",
    header: "Wheelbase",
  },
  {
    accessorKey: "website",
    header: "Website",
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
  },
  {
    id: "edit",
    header: "",
    cell: ({ row }) => {
      return (
        <Button asChild>
          <Link href={`/admin/cars/${row.original.slug}`}>Redigera</Link>
        </Button>
      );
    },
  },
];

const userColumns: ColumnDef<user>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "id",
    header: "ID",
  },
];

export default AdminPage;
