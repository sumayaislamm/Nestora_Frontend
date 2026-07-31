// "use server"

// import { cookies } from "next/headers"

// export const getMe = async () =>{
//  const cookieStore = await cookies();

//  const accessToken = cookieStore.get('accessToken')?.value;
//   if (!accessToken){
//     // throw new Error ("User not Logged in!")
//     return {
//         success : false,
//         message : "User Not Logged in!"
//     }
//   }


//   try {
//   const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
//     headers :{
//         // Authorization : accessToken as unknown as string,
//         Authorization : `Bearer ${accessToken}`,

//     },
//       // cache : "force-cache", 
//       next : {
//         // revalidate :  60 * 60 * 24 * 7 ,//1 day
//         tags : ["my-profile"]
//       }
//   });
//   const result = await res.json(); 
//   return result.success ? result : null;
// } catch (error) {
//   console.log("get Current user Failed:", error);
//   return null;
// }

// }

// "use server"

// import { cookies, headers } from "next/headers"

// export const getMe = async () =>{
//  const cookieStore = await cookies()

//  const accessToken = cookieStore.get("accessToken")?.value;
//  console.log(accessToken)

//  if (!accessToken) {
//   // throw new Error ("User Not Found!")
//   return {
//     success : false,
//     message: "user not logged in"
//   }
//  }

//  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
//   headers : {
//     Authorization : `Bearer ${accessToken}`
//   }
  
//  })
//  const result = await res.json()

//  return result;
// }

"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  console.log(accessToken)

  if (!accessToken) {
    return { success: false, message: "User not logged in" };
  }

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: { tags: ["my-profile"] },
    });

    if (!res.ok) {
      return { success: false, message: "Failed to fetch profile" };
    }

    const result = await res.json();
    console.log("getMe result:", JSON.stringify(result, null, 2));
    return result;
  } catch (error) {
    console.error("getMe failed:", error);
    return { success: false, message: "Failed to fetch profile" };
  }
};