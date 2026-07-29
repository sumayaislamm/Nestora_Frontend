"use server";

//Login

export const loginActions = async (formdata: FormData) => {
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

  console.log(result)
};

// register
export const registerActions = async (formdata: FormData) => {
  const name = formdata.get("name");
  const email = formdata.get("email");
  const password = formdata.get("password");
  const phone = formdata.get("phone");
  const profileImage = formdata.get("profileImage");
  const role = formdata.get("role");
  

};
