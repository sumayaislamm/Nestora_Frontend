"use server";

import { cookies } from "next/headers";
import { createPayment } from "@/app/service/paymentService";

export async function createPaymentAction(
  rentalRequestId: string,
  provider: "STRIPE" 
) {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  return await createPayment(
    rentalRequestId,
    provider,
    token
  );
}