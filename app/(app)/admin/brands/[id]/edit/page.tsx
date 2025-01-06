import { fetchCarBrandById } from "@/lib/data";
import EditBrandForm from "@/ui/admin/brands/edit-form";
import { notFound } from "next/navigation";

export default async function AdminBrandsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;
  const brand = await fetchCarBrandById(id);

  if (!brand) {
    notFound();
  }
  return (
    <>
      <h1 className="text-4xl">Uppdatera {brand.name}</h1>
      <EditBrandForm brand={brand} />
    </>
  );
}
