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
export const registerActions = async (formdata: FormData) => {
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

  const payload = {
    name,
    email,
    password,
    phone,
    profileImage,
    role,
  };

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