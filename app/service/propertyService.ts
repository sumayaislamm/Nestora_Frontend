import { IProperty } from "@/app/types/property";
import { revalidatePath } from "next/cache";

import { ICreateProperty } from "../types/property";

const BASE_URL = process.env.BACKEND_API_URL;

export const getAllProperties = async (): Promise<IProperty[]> => {
  const res = await fetch(`${BASE_URL}/api/properties`, {
    next: {
      revalidate: 30,
    },
  });

  const result = await res.json();

  //   const result = await res.json();

  // console.log("RESULT =", result);
  // console.log("RESULT.DATA =", result.data);

  return result.data.data;

  //   return result.data;
};

export const getSingleProperty = async (id: string): Promise<IProperty> => {
  const res = await fetch(`${BASE_URL}/api/properties/${id}`, {
    cache: "no-store",
  });

  const result = await res.json();

  return result.data;
};
export const getPropertyById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/properties/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch property");
  }

  const result = await res.json();

  return result.data.property;
};

export const getAllPropertiesSearch = async (query: Record<string, string>) => {
  const params = new URLSearchParams(query);

  const res = await fetch(`${BASE_URL}/api/properties?${params.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  const result = await res.json();

  return result.data.data;
};

// Landlord Dashboard Property Service

// export const createProperty = async (
//   payload: ICreateProperty,
//   token: string
// ) => {
//   const res = await fetch(
//     `${BASE_URL}/api/properties`,
//     {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: token,
//         Authorization: `Bearer ${token}`
//       },

//       body: JSON.stringify(payload),
//     }
//   );

//   return res.json();
// };

export const createProperty = async (
  data: Record<string, unknown>,
  token: string,
) => {
  const res = await fetch(`${BASE_URL}/api/properties`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed");
  }

  revalidatePath("/properties");
  revalidatePath("/landlord-dashboard/my-properties");

  return result;
};

export const getMyProperties = async (token: string) => {
  const res = await fetch(`${BASE_URL}/api/properties/my-properties`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  const result = await res.json();

  return result.data;
};

export const deleteProperty = async (id: string, token: string) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res.json();
};

// edit property
export const updateProperty = async (
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  token: string,
) => {
  const res = await fetch(`${BASE_URL}/api/properties/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Update failed");
  }

  return res.json();
};
