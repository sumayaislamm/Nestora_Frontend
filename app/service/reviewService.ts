const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createReview(
  data: {
    propertyId: string;
    rating: number;
    comment?: string;
  },
  token: string,
) {
  const res = await fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to create review");
  }

  return result;
}
