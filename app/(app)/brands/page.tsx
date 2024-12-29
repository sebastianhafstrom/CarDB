import BrandCards from "@/ui/brands/brand-cards";
import Search from "@/ui/search";

export default async function Page(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <>
      <h1 className="text-4xl font-bold mb-5">Bilmärken</h1>
      <Search placeholder="Sök..." />

      <BrandCards query={query} />
    </>
  );
}
