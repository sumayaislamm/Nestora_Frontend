export async function createPayment(
  rentalRequestId: string,
  provider: "STRIPE" | "SSLCOMMERZ",
  token: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payments/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        rentalRequestId,
        provider,
      }),
    }
  );

  return res.json();
}