"use server";

import { cookies } from "next/headers";
import { createReview } from "@/app/service/reviewService";

export async function createReviewAction(data: {
  propertyId: string;
  rating: number;
  comment?: string;
}) {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized. Please log in again.",
    };
  }

  try {
    const result = await createReview(data, `Bearer ${token}`);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to submit review",
    };
  }
}