"use server";

import { cookies } from "next/headers";
import { createProperty } from "@/app/service/propertyService";

import { PropertyFormValues } from "@/app/schemas/property.schema";

export async function createPropertyAction(
  data: PropertyFormValues
) {
  const cookieStore = await cookies();


  const token = cookieStore.get("accessToken")?.value;

  

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    const result = await createProperty(data, token);

    return {
      success: true,
      message: "Property Created Successfully",
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    };
  }
}