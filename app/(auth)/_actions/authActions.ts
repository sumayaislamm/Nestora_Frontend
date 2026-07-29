"use server";

//Login
type LoginState ={
     success: boolean,
    statusCode: number,
    message: string,
    data: {
        accessToken : string,
        refreshToken : string
    }
}
export const loginActions = async (prevState : LoginState , formdata: FormData) => {
  console.log(formdata);
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

  console.log(result);
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

export const registerActions = async (prevState: RegisterState, formdata: FormData) => {
  const name = formdata.get("name");
  const email = formdata.get("email");
  const password = formdata.get("password");
  const phone = formdata.get("phone");
  const role = formdata.get("role");
  const profileImageFile = formdata.get("profileImage") as File;

  let profileImage: string | null = null;

  if (profileImageFile && profileImageFile.size > 0) {
    const bytes = await profileImageFile.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");
    profileImage = `data:${profileImageFile.type};base64,${base64}`;
  }

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

  console.log(result);
  return result;
};