"use server";

import { cookies } from "next/headers";
import { updateRentalRequestStatus } from "@/app/service/rentalService";

export async function updateRentalStatusAction(
  id: string,
  status: "APPROVED" | "REJECTED"
) {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  return await updateRentalRequestStatus(id, status, token);
}