import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(3),

  description: z.string().min(10),

  location: z.string().min(2),

  address: z.string().min(5),

  rent: z.coerce.number().positive(),

  bedrooms: z.coerce.number().min(1),

  bathrooms: z.coerce.number().min(1),

  size: z.coerce.number().optional(),

  availability: z.enum([
    "AVAILABLE",
    "RENTED",
  ]),

  // categoryId: z.string().min(1),
  categoryId: z.string().min(1, "Category is required"),

  amenities: z.array(z.string()),

  images: z.array(z.string()),
});

export type PropertyFormValues =
  z.infer<typeof propertySchema>;