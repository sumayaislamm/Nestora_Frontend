// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // import { IProperty } from "@/app/types/property";
// // import { revalidatePath } from "next/cache";






// // const BASE_URL = process.env.BACKEND_API_URL;

// // export const getAllProperties = async (): Promise<IProperty[]> => {
// //   const res = await fetch(`${BASE_URL}/api/properties`, {
   
// //       cache: "no-store",
   
// //   });

// //   const result = await res.json();


// //   return result.data.data;

// // };

// // export const getSingleProperty = async (id: string): Promise<IProperty> => {
// //   const res = await fetch(`${BASE_URL}/api/properties/${id}`, {
// //     cache: "no-store",
// //   });

// //   const result = await res.json();

// //   return result.data.property;
// // };

// // export const getPropertyById = async (id: string) => {
// //   console.log("Fetching:", `${process.env.NEXT_PUBLIC_API_URL}/properties/${id}`);

// //   const res = await fetch(
// //     `${process.env.NEXT_PUBLIC_API_URL}/properties/${id}`,
// //     {
// //       cache: "no-store",
// //     },
// //   );

// //   console.log("Status:", res.status);

// //   const result = await res.json();

// //   console.log(result);

// //   return result.data.property;
// // };

// // export const getAllPropertiesSearch = async (query: Record<string, string>) => {
// //   const params = new URLSearchParams(query);

// //   const res = await fetch(`${BASE_URL}/api/properties?${params.toString()}`, {
// //     cache: "no-store",
// //   });

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch properties");
// //   }

// //   const result = await res.json();

// //   return result.data.data;
// // };

// // // Landlord Dashboard Property Service



// // export const createProperty = async (
// //   data: Record<string, unknown>,
// //   token: string,
// // ) => {
// //   const res = await fetch(`${BASE_URL}/api/properties`, {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",

// //       Authorization: `Bearer ${token}`,
// //     },
// //     body: JSON.stringify(data),
// //   });

// //   const result = await res.json();

// //   if (!res.ok) {
// //     throw new Error(result.message || "Failed");
// //   }

// //   revalidatePath("/properties");
// //   revalidatePath("/landlord-dashboard/my-properties");

// //   return result;
// // };

// // export const getMyProperties = async (token: string) => {
// //   const res = await fetch(`${BASE_URL}/api/properties/my-properties`, {
// //     headers: {
// //       "Content-Type": "application/json",
// //       Authorization: `Bearer ${token}`,
// //     },
// //     cache: "no-store",
// //   });

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch properties");
// //   }

// //   const result = await res.json();

// //   return result.data;
// // };

// // export const deleteProperty = async (id: string, token: string) => {
// //   const res = await fetch(
// //     `${process.env.BACKEND_API_URL}/api/properties/${id}`,
// //     {
// //       method: "DELETE",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${token}`,
// //       },
// //     },
// //   );

// //   return res.json();
// // };

// // // edit property

// // export const updateProperty = async (
// //   id: string,
// //   data: any,
// //   token: string
// // ) => {
// //   console.log("PATCH URL =", `${BASE_URL}/api/properties/${id}`);

// //   const res = await fetch(`${BASE_URL}/api/properties/${id}`, {
// //     method: "PATCH",
// //     headers: {
// //       "Content-Type": "application/json",
// //       Authorization: `Bearer ${token}`,
// //     },
// //     body: JSON.stringify(data),
// //   });

// //   console.log("STATUS =", res.status);

// //   const result = await res.json();

// //   console.log("RESULT =", result);

// //   if (!res.ok) {
// //     throw new Error(result.message);
// //   }

// //   return result;
// // };

// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { IProperty } from "@/app/types/property";
// import { revalidatePath } from "next/cache";

// const BASE_URL = process.env.BACKEND_API_URL;

// export type PropertyQuery = {
//   page?: string | number;
//   limit?: string | number;
//   search?: string;
//   category?: string;
//   availability?: string;
//   minRent?: string;
//   maxRent?: string;
// };

// export type PropertyMeta = {
//   page: number;
//   limit: number;
//   total: number;
// };

// export type PaginatedProperties = {
//   properties: IProperty[];
//   meta: PropertyMeta;
// };

// export const getProperties = async (
//   query: PropertyQuery = {},
// ): Promise<PaginatedProperties> => {
//   const params = new URLSearchParams();

//   params.set("page", String(query.page ?? 1));
//   params.set("limit", String(query.limit ?? 30));

//   if (query.search) params.set("search", query.search);
//   if (query.category) params.set("category", query.category);
//   if (query.availability) params.set("availability", query.availability);
//   if (query.minRent) params.set("minRent", query.minRent);
//   if (query.maxRent) params.set("maxRent", query.maxRent);

//   const res = await fetch(
//     `${BASE_URL}/api/properties?${params.toString()}`,
//     {
//       cache: "no-store",
//     },
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch properties");
//   }

//   const result = await res.json();

//   return {
//     properties: result.data.data,
//     meta: result.data.meta,
//   };
// };

// // Keep this for other existing pages/components
// export const getAllProperties = async (): Promise<IProperty[]> => {
//   const result = await getProperties({
//     page: 1,
//     limit: 1000,
//   });

//   return result.properties;
// };

// export const getSingleProperty = async (
//   id: string,
// ): Promise<IProperty> => {
//   const res = await fetch(`${BASE_URL}/api/properties/${id}`, {
//     cache: "no-store",
//   });

//   const result = await res.json();

//   return result.data.property;
// };

// export const getPropertyById = async (id: string) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/properties/${id}`,
//     {
//       cache: "no-store",
//     },
//   );

//   const result = await res.json();

//   return result.data.property;
// };

// export const getAllPropertiesSearch = async (
//   query: Record<string, string>,
// ) => {
//   const result = await getProperties(query);

//   return result.properties;
// };

// // -----------------------------
// // Landlord Dashboard
// // -----------------------------

// export const createProperty = async (
//   data: Record<string, unknown>,
//   token: string,
// ) => {
//   const res = await fetch(`${BASE_URL}/api/properties`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });

//   const result = await res.json();

//   if (!res.ok) {
//     throw new Error(result.message || "Failed");
//   }

//   revalidatePath("/properties");
//   revalidatePath("/landlord-dashboard/my-properties");

//   return result;
// };

// export const getMyProperties = async (token: string) => {
//   const res = await fetch(`${BASE_URL}/api/properties/my-properties`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch properties");
//   }

//   const result = await res.json();

//   return result.data;
// };

// export const deleteProperty = async (
//   id: string,
//   token: string,
// ) => {
//   const res = await fetch(
//     `${BASE_URL}/api/properties/${id}`,
//     {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );

//   return res.json();
// };

// export const updateProperty = async (
//   id: string,
//   data: any,
//   token: string,
// ) => {
//   const res = await fetch(`${BASE_URL}/api/properties/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });

//   const result = await res.json();

//   if (!res.ok) {
//     throw new Error(result.message);
//   }

//   return result;
// };




/* eslint-disable @typescript-eslint/no-explicit-any */

import { IProperty } from "../types/property";
import { revalidatePath } from "next/cache";

const BASE_URL = process.env.BACKEND_API_URL;

export type PropertyQuery = {
  page?: string | number;
  limit?: string | number;

  search?: string;

  // Backend filters
  categoryId?: string;
  availability?: string;
  location?: string;
  amenity?: string;
  bedrooms?: string | number;
  minRent?: string;
  maxRent?: string;

  // Sorting
  sortBy?: string;
  sortOrder?: string;
};

export type PropertyMeta = {
  page: number;
  limit: number;
  total: number;
};

export type PaginatedProperties = {
  properties: IProperty[];
  meta: PropertyMeta;
};

/* =========================================================
   GET PAGINATED PROPERTIES
   ========================================================= */

export const getProperties = async (
  query: PropertyQuery = {},
): Promise<PaginatedProperties> => {
  const params = new URLSearchParams();

  params.set("page", String(query.page ?? 1));
  params.set("limit", String(query.limit ?? 30));

  if (query.search) {
    params.set("search", query.search);
  }

  if (query.categoryId) {
    params.set("categoryId", query.categoryId);
  }

  if (query.availability) {
    params.set("availability", query.availability);
  }

  if (query.location) {
    params.set("location", query.location);
  }

  if (query.amenity) {
    params.set("amenity", query.amenity);
  }

  if (query.bedrooms) {
    params.set("bedrooms", String(query.bedrooms));
  }

  if (query.minRent) {
    params.set("minRent", query.minRent);
  }

  if (query.maxRent) {
    params.set("maxRent", query.maxRent);
  }

  if (query.sortBy) {
    params.set("sortBy", query.sortBy);
  }

  if (query.sortOrder) {
    params.set("sortOrder", query.sortOrder);
  }

  const res = await fetch(
    `${BASE_URL}/api/properties?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  const result = await res.json();

  return {
    properties: result.data.data,
    meta: result.data.meta,
  };
};

/* =========================================================
   GET ALL PROPERTIES
   Used by other existing pages/components
   ========================================================= */

export const getAllProperties = async (): Promise<IProperty[]> => {
  const result = await getProperties({
    page: 1,
    limit: 1000,
  });

  return result.properties;
};

/* =========================================================
   GET SINGLE PROPERTY
   ========================================================= */

export const getSingleProperty = async (
  id: string,
): Promise<IProperty> => {
  const res = await fetch(
    `${BASE_URL}/api/properties/${id}`,
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

/* =========================================================
   GET PROPERTY BY ID
   Keep this for existing code
   ========================================================= */

export const getPropertyById = async (
  id: string,
): Promise<IProperty> => {
  const res = await fetch(
    `${BASE_URL}/api/properties/${id}`,
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

/* =========================================================
   SEARCH PROPERTIES
   Keep this for existing code
   ========================================================= */

export const getAllPropertiesSearch = async (
  query: Record<string, string>,
) => {
  const result = await getProperties({
    ...query,
  });

  return result.properties;
};

/* =========================================================
   LANDLORD DASHBOARD
   CREATE PROPERTY
   ========================================================= */

export const createProperty = async (
  data: Record<string, unknown>,
  token: string,
) => {
  const res = await fetch(
    `${BASE_URL}/api/properties`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(data),
    },
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(
      result.message || "Failed to create property",
    );
  }

  revalidatePath("/properties");
  revalidatePath("/landlord-dashboard/my-properties");

  return result;
};

/* =========================================================
   GET MY PROPERTIES
   ========================================================= */

export const getMyProperties = async (
  token: string,
) => {
  const res = await fetch(
    `${BASE_URL}/api/properties/my-properties`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  const result = await res.json();

  return result.data;
};

/* =========================================================
   DELETE PROPERTY
   ========================================================= */

export const deleteProperty = async (
  id: string,
  token: string,
) => {
  const res = await fetch(
    `${BASE_URL}/api/properties/${id}`,
    {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(
      result.message || "Failed to delete property",
    );
  }

  revalidatePath("/properties");
  revalidatePath("/landlord-dashboard/my-properties");

  return result;
};

/* =========================================================
   UPDATE PROPERTY
   ========================================================= */

export const updateProperty = async (
  id: string,
  data: any,
  token: string,
) => {
  const res = await fetch(
    `${BASE_URL}/api/properties/${id}`,
    {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(data),
    },
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(
      result.message || "Failed to update property",
    );
  }

  revalidatePath("/properties");
  revalidatePath("/landlord-dashboard/my-properties");

  return result;
};