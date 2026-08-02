"use server";

import { cookies } from "next/headers";

export async function confirmPaymentAction(
  paymentId: string,
  transactionId: string
) {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payments/confirm`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        paymentId,
        transactionId,
      }),
    }
  );

  return res.json();
}