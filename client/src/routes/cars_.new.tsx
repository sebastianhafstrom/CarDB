import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createCar, fetchBrands } from "@/api/api";

export const Route = createFileRoute("/cars/new")({
  component: NewCar,
  loader: fetchBrands,
});

const bodyTypeOptions = [
  {
    value: "SEDAN",
    label: "Sedan",
  },
  {
    value: "COUPE",
    label: "Coupe",
  },
  {
    value: "CONVERTIBLE",
    label: "Convertible",
  },
  {
    value: "WAGON",
    label: "Wagon",
  },
  {
    value: "HATCHBACK",
    label: "Hatchback",
  },
  {
    value: "SUV",
    label: "SUV",
  },
  {
    value: "TRUCK",
    label: "Truck",
  },
  {
    value: "VAN",
    label: "Van",
  },
];

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(2, {
    message: "Name must be at least 2 characters.",
  }),
  slug: z.string({ required_error: "Slug is required" }).min(2, {
    message: "Slug must be at least 2 characters.",
  }),
  body_type: z.string({ required_error: "Body type is required." }),
  brand_id: z.string({ required_error: "Brand is required." }),
});

function NewCar() {
  const brands = Route.useLoaderData();
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      slug: undefined,
      body_type: undefined,
      brand_id: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    createCar(values).then(() => {
      // Redirect to the cars page.
      navigate({ to: "/cars" });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-[500px] mx-auto mt-8"
      >
        <h1 className="text-4xl font-bold">New car</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>The name of the car.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input placeholder="Slug" {...field} />
              </FormControl>
              <FormDescription>The slug to be used in the URL.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the body type of the car" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {bodyTypeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>The body type of the car.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brand_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the brand" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {brands.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>The brand of the car.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
