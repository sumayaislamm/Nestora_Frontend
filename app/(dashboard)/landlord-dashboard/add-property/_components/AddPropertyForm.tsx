"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCategories } from "@/app/hooks/useCategories";

import {
  propertySchema,
  PropertyFormValues,
} from "@/app/schemas/property.schema";

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
import { createPropertyAction } from "../_actions/createPropertyAction";
import { useState } from "react";

export default function AddPropertyForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),

    defaultValues: {
      title: "",
      description: "",
      location: "",
      address: "",
      rent: 0,
      bedrooms: 1,
      bathrooms: 1,
      size: 0,
      availability: "AVAILABLE",
      categoryId: "",
      amenities: [],
      images: [],
    },
  });

  const { categories, loading, error } = useCategories();

  const availability = watch("availability");
  const categoryId = watch("categoryId");
  // const [categories, setCategories] = useState([]);

  const [imageUrl, setImageUrl] = useState("");
  const images = watch("images");

  const onSubmit = async (values: PropertyFormValues) => {
    console.log(values.categoryId);
    console.log("SUBMIT CLICKED");
    console.log(values);
    const payload = {
      ...values,
      rent: Number(values.rent),
      bedrooms: Number(values.bedrooms),
      bathrooms: Number(values.bathrooms),
      size: Number(values.size),
    };
    console.log(payload);
    const res = await createPropertyAction(payload);

    if (res.success) {
      toast.success(res.message);
      reset();
    } else {
      toast.error(res.message);
    }
  };

  const addImage = () => {
    const trimmed = imageUrl.trim();

    if (!trimmed) {
      toast.error("Please enter an image URL");
      return;
    }

    // Check valid URL
    let url: URL;

    try {
      url = new URL(trimmed);
    } catch {
      toast.error("Please enter a valid URL");
      return;
    }

    // Allowed hosts
    const allowedHosts = [
      "i.ibb.co",
      "images.unsplash.com",
      "res.cloudinary.com",
      "plus.unsplash.com",
       "i.ibb.co.com"
    ];

    if (!allowedHosts.includes(url.hostname)) {
      toast.error("Unsupported image host. Use ImgBB, Unsplash or Cloudinary.");
      return;
    }

    // Duplicate check
    if (images.includes(trimmed)) {
      toast.error("Image already added");
      return;
    }

    // Check image actually loads
    const img = new Image();

    img.onload = () => {
      toast.success(`Image added (${img.naturalWidth} × ${img.naturalHeight})`);

      setValue("images", [...images, trimmed], {
        shouldValidate: true,
      });

      setImageUrl("");
    };

    img.onerror = () => {
      toast.error("Image could not be loaded. Please check the URL.");
    };

    img.src = trimmed;
  };

  const removeImage = (url: string) => {
    setValue(
      "images",
      images.filter((img) => img !== url),
      { shouldValidate: true },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-5xl space-y-6 rounded-xl bg-white p-4 shadow sm:p-6 md:p-8"
    >
      {/* Title + Rent */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Title</label>

          <Input placeholder="Luxury Apartment" {...register("title")} />

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

      {/* Numbers */}

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
          onValueChange={(value) => {
            setValue("categoryId", value, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            });
          }}
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

      </div>
      {/* Images */}
      <div>
        <label className="mb-2 block font-medium">Property Images (URL)</label>

        <div className="flex gap-2">
          <Input
            placeholder="https://example.com/image.jpg"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addImage();
              }
            }}
          />
          <Button type="button" variant="secondary" onClick={addImage}>
            Add
          </Button>
        </div>

        <p className="mt-1 text-sm text-red-500">{errors.images?.message}</p>

        {images.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {images.map((url, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg border"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={`Property image ${idx + 1}`}
                  className="h-24 w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/150?text=Invalid+URL";
                  }}
                />
                <button
                  type="button"
                  onClick={() => removeImage(url)}
                  className="absolute right-1 top-1 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white opacity-0 transition group-hover:opacity-100"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
        <p>
          {" "}
          <span className="font-medium text-green-600">
            Supported hosts:
          </span>{" "}
          ImgBB, Cloudinary, Unsplash 
        </p>
      </div>

      <Button
        type="submit"
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating..." : "Add Property"}
      </Button>
    </form>
  );
}
