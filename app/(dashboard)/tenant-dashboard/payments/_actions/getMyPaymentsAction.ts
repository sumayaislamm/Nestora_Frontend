"use server";

import { cookies } from "next/headers";
import { getMyPayments } from "@/app/service/paymentService";

export async function getMyPaymentsAction() {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      data: [],
    };
  }

  return await getMyPayments(token);
}