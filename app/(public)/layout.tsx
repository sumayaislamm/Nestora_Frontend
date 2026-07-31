import { Navbar } from "@/components/navbar";
import React from "react";
import { getMe } from "../service/getMe";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <>
    <Navbar user={user}></Navbar>
      PublicLayout
      {children}
    </>
  );
};

export default PublicLayout;
