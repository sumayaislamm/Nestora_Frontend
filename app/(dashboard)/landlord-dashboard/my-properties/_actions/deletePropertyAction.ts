"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { deleteProperty } from "@/app/service/propertyService";

export async function deletePropertyAction(
  id: string
) {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const result = await deleteProperty(
    id,
    token
  );

  revalidatePath(
    "/landlord-dashboard/my-properties"
  );

  return result;
}