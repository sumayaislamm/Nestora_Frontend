import { IProperty } from "@/app/types/property";

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

export const getSingleProperty = async (
  id: string,
): Promise<IProperty> => {
  const res = await fetch(`${BASE_URL}/api/properties/${id}`, {
    cache: "no-store",
  });

  const result = await res.json();

  return result.data;
};