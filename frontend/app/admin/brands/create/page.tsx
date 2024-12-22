"use client";
import { createBrand } from "@/api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const brandFormSchema = z.object({
  brandName: z
    .string()
    .min(2, "Bilmärkesnamn måste vara minst 2 tecken långt")
    .max(50, "Bilmärkesnamn får vara högst 50 tecken långt")
    .regex(
      /^[a-zA-Z0-9\s]+$/,
      "Bilmärkesnamn får bara innehålla bokstäver och siffror"
    ),
  country: z
    .string()
    .min(2, "Ursprungsland måste vara minst 2 tecken långt")
    .max(50, "Ursprungsland får vara högst 50 tecken långt"),
  website: z.string().url("Webbplats måste vara en giltig URL"),
  slug: z
    .string()
    .min(2, "Slug måste vara minst 2 tecken lång")
    .max(50, "Slug får vara högst 50 tecken lång")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug får bara innehålla små bokstäver, siffror och bindestreck"
    ),
});

export default function AdminCreateBrandPage() {
  const router = useRouter();

  const createBrandForm = useForm<z.infer<typeof brandFormSchema>>({
    resolver: zodResolver(brandFormSchema),
    defaultValues: {
      brandName: "",
      country: "",
      website: "",
      slug: "",
    },
  });

  const submitCreateBrand = async (data: z.infer<typeof brandFormSchema>) => {
    try {
      await createBrand({
        name: data.brandName,
        country: data.country,
        website: data.website,
        slug: data.slug,
      });
      router.push("/admin?tab=brands");
    } catch (error: any) {
      if (error.response) {
        const { data } = error.response;
        createBrandForm.setError("brandName", {
          type: "server",
          message: data.message,
        });
        return;
      }
      createBrandForm.setError("brandName", {
        type: "server",
        message: error.message,
      });
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold pb-4">Lägg till bilmärke</h1>
      <Form {...createBrandForm}>
        <form
          onSubmit={createBrandForm.handleSubmit(submitCreateBrand)}
          className="space-y-8"
        >
          <FormField
            control={createBrandForm.control}
            name="brandName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Namn</FormLabel>
                <FormControl>
                  <Input placeholder="Volvo" {...field} />
                </FormControl>
                <FormDescription>
                  Namnet på bilmärket, t.ex. "Volvo"
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createBrandForm.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ursprungsland</FormLabel>
                <FormControl>
                  <Input placeholder="Sverige" {...field} />
                </FormControl>
                <FormDescription>
                  Ursprungsland för bilmärket, t.ex. "Sverige"
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createBrandForm.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Webbplats</FormLabel>
                <FormControl>
                  <Input placeholder="https://volvocars.com" {...field} />
                </FormControl>
                <FormDescription>
                  Webbplats för bilmärket, t.ex. "https://volvocars.com"
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createBrandForm.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input placeholder="volvo" {...field} />
                </FormControl>
                <FormDescription>
                  Slug för bilmärket, t.ex. "volvo"
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Lägg till</Button>
        </form>
      </Form>
    </>
  );
}
