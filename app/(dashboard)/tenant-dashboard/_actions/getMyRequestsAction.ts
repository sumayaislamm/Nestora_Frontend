"use server";

import { cookies } from "next/headers";

export async function getMyRequestsAction() {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rentals`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    cache: "no-store",
  });

  return res.json();
}