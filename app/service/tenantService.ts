const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getTenantDashboardData(token: string) {
  const [rentalsRes, paymentsRes] = await Promise.all([
    fetch(`${API_URL}/rentals`, {
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    }),

    fetch(`${API_URL}/payments`, {
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    }),
  ]);

  const rentals = await rentalsRes.json();

  const payments = await paymentsRes.json();

  return {
    rentals: rentals.data?.rentals || [],

    payments: payments.data?.payments || [],
  };
}
