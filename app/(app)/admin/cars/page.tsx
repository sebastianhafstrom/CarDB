import { CreateCar } from "@/ui/admin/cars/buttons";
import CarsTable from "@/ui/admin/cars/table";
import Search from "@/ui/search";

export default async function Page(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <>
      <h1 className="text-4xl font-bold mb-5">Bilar</h1>
      <div className="flex gap-2">
        <Search placeholder="Sök..." />
        <CreateCar />
      </div>
      <CarsTable query={query} />
    </>
  );
}
