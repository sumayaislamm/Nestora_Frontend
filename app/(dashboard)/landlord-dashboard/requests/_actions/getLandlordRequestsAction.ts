"use server";

import { cookies } from "next/headers";
import { getLandlordRequests } from "@/app/service/rentalService";

export async function getLandlordRequestsAction() {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
      data: [],
    };
  }

  return await getLandlordRequests(token);
}