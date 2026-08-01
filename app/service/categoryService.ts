// import { ICategory } from "../types/property";

// const BASE_URL = process.env.BACKEND_API_URL;

// export const getCategories = async (): Promise<ICategory[]> => {
//   const res = await fetch(`${BASE_URL}/api/categories`, {
//     next: {
//       revalidate: 60,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch categories");
//   }

//   const result = await res.json();

//   return result.data;
// };

import { ICategory } from "../types/category";

const BASE_URL = process.env.BACKEND_API_URL;

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result = await res.json();

  return result.data.categories;
};