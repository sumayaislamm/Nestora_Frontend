"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

//Login
type LoginState = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};
export const loginActions = async (
  prevState: LoginState,
  formdata: FormData,
) => {
  // console.log(formdata);
  const email = formdata.get("email");
  const password = formdata.get("password");

  const payload = {
    email,
    password,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24, //1 day
      sameSite: "lax",
    });
    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, //7 days
      sameSite: "lax",
    });

    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;
    // console.log("decoded token", decodedToken);

    if (decodedToken?.role === "TENANT") {
      redirect("/tenant-dashboard", "replace");
    } else if (decodedToken?.role === "LANDLORD") {
      redirect("/landlord-dashboard", "replace");
    } else if (decodedToken?.role === "ADMIN") {
      redirect("/admin-dashboard", "replace");
    } else {
      redirect("/");
    }
  }
  return result;
};

// register
type RegisterState = {
  success: boolean;
  statusCode: number;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export const registerActions = async (
  prevState: RegisterState,
  formdata: FormData,
) => {
  const name = formdata.get("name");
  const email = formdata.get("email");
  const password = formdata.get("password");
  const phone = formdata.get("phone");
  const role = formdata.get("role");
  const profileImage = formdata.get("profileImage");

  const payload: Record<string, unknown> = {
    name,
    email,
    password,
    role,
  };

  if (phone) payload.phone = phone;
  if (profileImage) payload.profileImage = profileImage;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await res.json();

  return result;
};

//Demo Login

export const demoLoginAction = async (role: string) => {
  const demoAccounts: Record<string, { email: string; password: string }> = {
    TENANT: {
      email: process.env.DEMO_TENANT_EMAIL!,
      password: process.env.DEMO_TENANT_PASSWORD!,
    },
    LANDLORD: {
      email: process.env.DEMO_LANDLORD_EMAIL!,
      password: process.env.DEMO_LANDLORD_PASSWORD!,
    },
    ADMIN: {
      email: process.env.DEMO_ADMIN_EMAIL!,
      password: process.env.DEMO_ADMIN_PASSWORD!,
    },
  };

  const account = demoAccounts[role];

  if (!account) {
    throw new Error("Invalid demo role");
  }

  const formData = new FormData();
  formData.set("email", account.email);
  formData.set("password", account.password);

  return loginActions(
    {
      success: false,
      statusCode: 0,
      message: "",
      data: { accessToken: "", refreshToken: "" },
    },
    formData,
  );
};
