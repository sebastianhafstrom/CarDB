import { createCarGeneration, fetchCarBySlug } from "@/api/api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/cars/$carSlug/generations/new")({
  component: NewCarGeneration,
  loader: ({ params: { carSlug } }) => fetchCarBySlug(carSlug),
});

const formSchema = z.object({
  name: z.string().min(1),
  production_start_year: z.coerce.number().int().min(1900),
  production_end_year: z.coerce.number().int().min(1900),
  tire_size: z.string(),
  length_mm: z.coerce.number().int(),
  width_mm: z.coerce.number().int(),
  height_mm: z.coerce.number().int(),
  ground_clearance_mm: z.coerce.number().int(),
  cargo_volume_litres: z.coerce.number().int(),
});

function NewCarGeneration() {
  const car = Route.useLoaderData();

  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      production_start_year: undefined,
      production_end_year: undefined,
      tire_size: undefined,
      length_mm: undefined,
      width_mm: undefined,
      height_mm: undefined,
      ground_clearance_mm: undefined,
      cargo_volume_litres: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    createCarGeneration(car.slug, values).then(() => {
      // Redirect to the brands page.
      navigate({ to: "/cars/$carSlug", params: { carSlug: car.slug } });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-[500px] mx-auto mt-8"
      >
        <h1 className="text-4xl font-bold">
          New generation for {car.brand.name + " " + car.name}
        </h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>The name of the generation.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="production_start_year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Production start year</FormLabel>
              <FormControl>
                <Input placeholder="Production start year" {...field} />
              </FormControl>
              <FormDescription>The start year of production.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="production_end_year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Production end year</FormLabel>
              <FormControl>
                <Input placeholder="Production end year" {...field} />
              </FormControl>
              <FormDescription>The end year of production.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tire_size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tire size</FormLabel>
              <FormControl>
                <Input placeholder="Tire size" {...field} />
              </FormControl>
              <FormDescription>The size of the tires.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="length_mm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Length (mm)</FormLabel>
              <FormControl>
                <Input placeholder="Length (mm)" {...field} />
              </FormControl>
              <FormDescription>
                The length of the car in millimeters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="width_mm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Width (mm)</FormLabel>
              <FormControl>
                <Input placeholder="Width (mm)" {...field} />
              </FormControl>
              <FormDescription>
                The width of the car in millimeters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="height_mm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height (mm)</FormLabel>
              <FormControl>
                <Input placeholder="Height (mm)" {...field} />
              </FormControl>
              <FormDescription>
                The height of the car in millimeters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ground_clearance_mm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ground clearance (mm)</FormLabel>
              <FormControl>
                <Input placeholder="Ground clearance (mm)" {...field} />
              </FormControl>
              <FormDescription>
                The ground clearance of the car in millimeters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cargo_volume_litres"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cargo volume (litres)</FormLabel>
              <FormControl>
                <Input placeholder="Cargo volume (litres)" {...field} />
              </FormControl>
              <FormDescription>
                The cargo volume of the car in litres.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
