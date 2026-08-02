export async function createRentalRequest(
  data: {
    propertyId: string;
    moveInDate: string;
    message?: string;
  },
  token: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rentals`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  return result;
}

// landlord request see

export async function getLandlordRequests(token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/landlord/requests`,
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

//landlord request update

export async function updateRentalRequestStatus(
  id: string,
  status: "APPROVED" | "REJECTED",
  token: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/landlord/requests/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ status }),
    }
  );

  return res.json();
}


// tenant rental history

export async function getMyRentals(token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rentals`,
    {
      method: "GET",
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    }
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(
      result.message || "Failed to fetch rentals"
    );
  }

  return result;
}