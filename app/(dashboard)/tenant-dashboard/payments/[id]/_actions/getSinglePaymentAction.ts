"use server";

import { cookies } from "next/headers";
import {
  getSinglePayment,
} from "@/app/service/paymentService";

export async function getSinglePaymentAction(
  id: string
) {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
    };
  }

  return await getSinglePayment(id, token);
}