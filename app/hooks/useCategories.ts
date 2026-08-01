// "use client";

// import { useEffect, useState } from "react";
// import { ICategory } from "../types/category";

// export function useCategories() {
//   const [categories, setCategories] = useState<ICategory[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function load() {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/categories`
//         );

//         const result = await res.json();

//         console.log(result);

//         setCategories(result.data.categories ?? []);
//       } catch (err) {
//         console.error(err);
//         setCategories([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, []);

//   return {
//     categories,
//     loading,
//   };
// }

"use client";

import { useEffect, useState } from "react";
import { ICategory } from "../types/category";

export function useCategories() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        if (!res.ok) throw new Error("Failed to load categories");

        const result = await res.json();

        // Handles {data:{categories:[]}} OR {data:[]} OR {categories:[]} OR raw []
        const list =
          result?.data?.categories ??
          result?.data ??
          result?.categories ??
          (Array.isArray(result) ? result : []);

        setCategories(list);
      } catch (err) {
        console.error(err);
        setError("Could not load categories");
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { categories, loading, error };
}