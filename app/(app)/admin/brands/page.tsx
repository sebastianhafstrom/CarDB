import { CreateBrand } from "@/ui/admin/brands/buttons";
import BrandsTable from "@/ui/admin/brands/table";
import Search from "@/ui/search";

export default async function Page(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <>
      <h1 className="text-4xl font-bold mb-5">Bilmärken</h1>
      <div className="flex gap-2">
        <Search placeholder="Sök..." />
        <CreateBrand />
      </div>
      <BrandsTable query={query} />
    </>
  );
}
