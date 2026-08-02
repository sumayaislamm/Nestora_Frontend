const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Get All Users
export async function getAllUsers(token: string) {
  const res = await fetch(`${API_URL}/admin/users`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch users");
  }

  return data;
}

// Update User Status
export async function updateUserStatus(
  id: string,
  status: "ACTIVE" | "BANNED",
  token: string,
) {
  const res = await fetch(`${API_URL}/admin/users/${id}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },

    body: JSON.stringify({
      status,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to update user");
  }

  return data;
}

// Admin Statistics
export async function getAdminStats(token: string) {
  const [usersRes, propertiesRes, rentalsRes] = await Promise.all([
    fetch(`${API_URL}/admin/users`, {
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    }),

    fetch(`${API_URL}/admin/properties`, {
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    }),

    fetch(`${API_URL}/admin/rentals`, {
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    }),
  ]);

  const users = await usersRes.json();
  const properties = await propertiesRes.json();
  const rentals = await rentalsRes.json();

  return {
    users: users.data.users,
    properties: properties.data.properties,
    rentals: rentals.data.rentals,
  };
}

export async function getAllProperties(token: string) {
  const res = await fetch(`${API_URL}/admin/properties`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch properties");
  }

  return data;
}

//rentals
export async function getAllRentals(token: string) {

  const res = await fetch(
    `${API_URL}/admin/rentals`,
    {
      method: "GET",
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    }
  );


  const data = await res.json();


  if (!res.ok) {
    throw new Error(
      data.message || "Failed to fetch rentals"
    );
  }


  return data;

}