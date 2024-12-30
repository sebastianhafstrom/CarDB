"use client";
import { BrandState, updateBrand } from "@/lib/actions";
import { Button } from "@/ui/components/button";
import { CarBrand, Country } from "@prisma/client";
import Link from "next/link";
import { useActionState, useState } from "react";

const countryLabels: { value: Country; label: string }[] = [
  { value: Country.SWEDEN, label: "Sverige 🇸🇪" },
  { value: Country.UNITED_STATES, label: "USA 🇺🇸" },
  { value: Country.JAPAN, label: "Japan 🇯🇵" },
  { value: Country.GERMANY, label: "Tyskland 🇩🇪" },
  { value: Country.FRANCE, label: "Frankrike 🇫🇷" },
  { value: Country.ITALY, label: "Italien 🇮🇹" },
  { value: Country.SOUTH_KOREA, label: "Sydkorea 🇰🇷" },
  { value: Country.UNITED_KINGDOM, label: "Storbritannien 🇬🇧" },
  { value: Country.CZECH_REPUBLIC, label: "Tjeckien 🇨🇿" },
  { value: Country.ROMANIA, label: "Rumänien 🇷🇴" },
  { value: Country.SPAIN, label: "Spanien 🇪🇸" },
];
export default function EditBrandForm({ brand }: { brand: CarBrand }) {
  const initialState: BrandState = { message: null, errors: {} };
  const updateBrandWithId = updateBrand.bind(null, brand.id);
  const [state, formAction] = useActionState(updateBrandWithId, initialState);

  const [name, setName] = useState(brand.name);
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, ""); // Generate slug
  const logoUrl = `/brands/${slug}.png`; // Generate logo URL

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Brand Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ange bilmärkets namn"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                value={name}
                defaultValue={name}
                onChange={handleNameChange}
                aria-describedby="name-error"
              />
            </div>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Brand slug */}
        <div className="mb-4">
          <label htmlFor="slug" className="mb-2 block text-sm font-medium">
            Slug
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="slug"
                name="slug"
                type="text"
                readOnly
                value={slug}
                defaultValue={slug}
                placeholder="Ange bilmärkets slug"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="slug-error"
              />
            </div>
          </div>
          <div id="slug-error" aria-live="polite" aria-atomic="true">
            {state.errors?.slug &&
              state.errors.slug.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Brand country */}
        <div className="mb-4">
          <label htmlFor="country" className="mb-2 block text-sm font-medium">
            Välj bilmärkets land
          </label>
          <div className="relative">
            <select
              id="country"
              name="country"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={brand.country}
              aria-describedby="country-error"
            >
              <option value="" disabled>
                Välj ett land
              </option>
              {countryLabels.map((countryLabel) => (
                <option key={countryLabel.value} value={countryLabel.value}>
                  {countryLabel.label}
                </option>
              ))}
            </select>
          </div>
          <div id="country-error" aria-live="polite" aria-atomic="true">
            {state.errors?.country &&
              state.errors.country.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Brand website */}
        <div className="mb-4">
          <label htmlFor="website" className="mb-2 block text-sm font-medium">
            Hemsida
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="website"
                name="website"
                type="url"
                defaultValue={brand.website}
                placeholder="Ange bilmärkets hemsida"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="website-error"
              />
            </div>
          </div>
          <div id="website-error" aria-live="polite" aria-atomic="true">
            {state.errors?.website &&
              state.errors.website.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Brand logo URL */}
        <div className="mb-4">
          <label htmlFor="logoUrl" className="mb-2 block text-sm font-medium">
            Länk till logga
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="logoUrl"
                name="logoUrl"
                type="text"
                value={logoUrl}
                defaultValue={logoUrl}
                readOnly
                placeholder="Ange bilmärkets loggas länk"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="logoUrl-error"
              />
            </div>
          </div>
          <div id="logoUrl-error" aria-live="polite" aria-atomic="true">
            {state.errors?.logoUrl &&
              state.errors.logoUrl.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {state.message && (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        )}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin/brands"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Avbryt
        </Link>
        <Button type="submit">Spara bilmärke</Button>
      </div>
    </form>
  );
}
