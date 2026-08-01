/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";
import { updateProperty } from "@/app/service/propertyService";

export async function updatePropertyAction(
  id: string,
  payload: any
) {
  const token =
    (await cookies()).get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    const result = await updateProperty(
      id,
      payload,
      token
    );

    return {
      success: true,
      data: result,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
}