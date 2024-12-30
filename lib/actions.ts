"use server";
import prisma from "@/lib/prisma";
import { Country } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const BrandFormSchema = z.object({
  id: z.string(),
  name: z.string({
    required_error: "Ange ett namn",
    invalid_type_error: "Ange ett namn",
  }),
  slug: z.string({
    required_error: "Ange ett slug",
    invalid_type_error: "Ange ett slug",
  }),
  country: z.nativeEnum(Country, { message: "Ange ett land" }),
  website: z
    .string({
      required_error: "Ange en webbplats",
      invalid_type_error: "Ange en webbplats",
    })
    .url({ message: "Ange en giltig URL" }),
  logoUrl: z.string({
    required_error: "Ange en logo URL",
    invalid_type_error: "Ange en logo URL",
  }),
});

export type BrandState = {
  errors?: {
    name?: string[];
    slug?: string[];
    country?: string[];
    website?: string[];
    logoUrl?: string[];
  };
  message: string | null;
};

const CreateBrand = BrandFormSchema.omit({ id: true });
export async function createBrand(
  prevState: BrandState,
  formData: FormData
): Promise<BrandState> {
  const validatedFields = CreateBrand.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    country: formData.get("country"),
    website: formData.get("website"),
    logoUrl: formData.get("logoUrl"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to create brand.",
    };
  }

  const { name, slug, country, website, logoUrl } = validatedFields.data;

  try {
    const brand = await prisma.carBrand.create({
      data: {
        name,
        slug,
        country,
        website,
        logoUrl,
      },
    });
    console.log("Created brand", brand);
  } catch (error) {
    return {
      message: "Database error: Failed to create brand. Error:" + error,
    };
  }

  revalidatePath("/admin/brands");
  redirect("/admin/brands");
}

const UpdateBrand = BrandFormSchema.omit({ id: true });
export async function updateBrand(
  id: string,
  prevState: BrandState,
  formData: FormData
): Promise<BrandState> {
  const validatedFields = UpdateBrand.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    country: formData.get("country"),
    website: formData.get("website"),
    logoUrl: formData.get("logoUrl"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to update brand.",
    };
  }

  const { name, slug, country, website, logoUrl } = validatedFields.data;

  try {
    const brand = await prisma.carBrand.update({
      where: { id },
      data: {
        name,
        slug,
        country,
        website,
        logoUrl,
      },
    });
    console.log("Updated brand", brand);
  } catch (error) {
    return {
      message: "Database error: Failed to update brand. Error:" + error,
    };
  }

  revalidatePath("/admin/brands");
  redirect("/admin/brands");
}
