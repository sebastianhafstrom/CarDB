import { fetchFilteredBrandsAdmin } from "@/lib/data";
import { brandMeta } from "@/types/types";
import Image from "next/image";
import { UpdateBrand } from "./buttons";

export default async function BrandsTable({ query }: { query?: string }) {
  const brands = await fetchFilteredBrandsAdmin(query || "");

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {/* <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <table className="table min-w-full text-gray-900">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Bilmärke
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Slug
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Land
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Antal bilar
                </th>
                {/* <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th> */}
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {brands?.map((brand) => (
                <tr
                  key={brand.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 px-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={brand.logoUrl}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${brand.name}'s logo`}
                      />
                      <p>{brand.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{brand.slug}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {`${brandMeta[brand.country].label} ${
                      brandMeta[brand.country].flag
                    }`}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {brand.models.length}
                  </td>
                  {/* <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateBrand id={brand.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
