"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  propertySchema,
  PropertyFormValues,
} from "@/app/schemas/property.schema";

import { IProperty } from "@/app/types/property";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";

import { updatePropertyAction } from "../_actions/updatePropertyAction";
import { useCategories } from "@/app/hooks/useCategories";
import { useEffect } from "react";

type Props = {
  property: IProperty;
};

export default function EditPropertyForm({ property }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),

    defaultValues: {
      title: property.title,
      description: property.description,
      location: property.location,
      address: property.address,

      rent: Number(property.rent),
      bedrooms: Number(property.bedrooms),
      bathrooms: Number(property.bathrooms),
      size: Number(property.size),

      availability: property.availability,

      categoryId: property.category?.id ?? "",

      amenities: property.amenities ?? [],

      images: property.images ?? [],
    },
  });
  console.log("PROPERTY =", property);
  console.log("PROPERTY ID =", property.id);

  const availability = watch("availability");
  const { categories, loading } = useCategories();

  const categoryId = watch("categoryId");
  useEffect(() => {
    if (property.category?.id) {
      setValue("categoryId", property.category.id);
    }
  }, [property, setValue]);

  const onSubmit = async (values: PropertyFormValues) => {
    const payload = {
      ...values,

      rent: Number(values.rent),
      bedrooms: Number(values.bedrooms),
      bathrooms: Number(values.bathrooms),
      size: Number(values.size),
    };
    console.log("FORM SUBMITTED");
    console.log("PAYLOAD =", payload);

    const res = await updatePropertyAction(property.id, payload);

    if (res.success) {
      toast.success("Property updated successfully");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (errors) => {
        console.log("FORM ERRORS =", errors);
      })}
      className="space-y-6"
    >
      {/* Title + Rent */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Title</label>

          <Input {...register("title")} />

          <p className="text-sm text-red-500">{errors.title?.message}</p>
        </div>

        <div>
          <label className="mb-2 block font-medium">Rent</label>

          <Input
            type="number"
            {...register("rent", {
              valueAsNumber: true,
            })}
          />

          <p className="text-sm text-red-500">{errors.rent?.message}</p>
        </div>
      </div>

      {/* Location + Address */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Location</label>

          <Input {...register("location")} />

          <p className="text-sm text-red-500">{errors.location?.message}</p>
        </div>

        <div>
          <label className="mb-2 block font-medium">Address</label>

          <Input {...register("address")} />

          <p className="text-sm text-red-500">{errors.address?.message}</p>
        </div>
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block font-medium">Description</label>

        <Textarea rows={5} {...register("description")} />

        <p className="text-sm text-red-500">{errors.description?.message}</p>
      </div>

      {/* Bedrooms Bathrooms Size */}

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">Bedrooms</label>

          <Input
            type="number"
            {...register("bedrooms", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Bathrooms</label>

          <Input
            type="number"
            {...register("bathrooms", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Size (sqft)</label>

          <Input
            type="number"
            {...register("size", {
              valueAsNumber: true,
            })}
          />
        </div>
      </div>

      {/* Availability */}

      <div>
        <label className="mb-2 block font-medium">Availability</label>

        <Select
          value={availability}
          onValueChange={(value) =>
            setValue("availability", value as "AVAILABLE" | "RENTED")
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="AVAILABLE">Available</SelectItem>

            <SelectItem value="RENTED">Rented</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Category */}

      <div>
        <label className="mb-2 block font-medium">Category</label>

        <Select
          value={categoryId}
          onValueChange={(value) =>
            setValue("categoryId", value, {
              shouldValidate: true,
              shouldDirty: true,
            })
          }
        >
          <SelectTrigger>
            <SelectValue
              placeholder={
                loading ? "Loading categories..." : "Select Category"
              }
            />
          </SelectTrigger>

          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <p className="text-sm text-red-500">{errors.categoryId?.message}</p>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Updating..." : "Update Property"}
      </Button>
    </form>
  );
}
