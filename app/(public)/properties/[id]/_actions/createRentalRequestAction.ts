"use server";

import { cookies } from "next/headers";
import { createRentalRequest } from "@/app/service/rentalService";

export async function createRentalRequestAction(
  propertyId: string
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
    const result = await createRentalRequest(
      {
        propertyId,
        moveInDate: new Date().toISOString(),
        message: "Rental request submitted",
      },
      token
    );

    return result;
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