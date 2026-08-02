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

export async function getMyPayments(token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payments`,
    {
      method: "GET",
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    }
  );

  return res.json();
}


export async function getSinglePayment(
  id: string,
  token: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payments/${id}`,
    {
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    }
  );

  return res.json();
}