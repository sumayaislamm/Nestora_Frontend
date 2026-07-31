import { Navbar } from "@/components/navbar";
import React from "react";
import { getMe } from "../service/getMe";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <>
    <Navbar user={user}></Navbar>
      DashboardLayout
      {children}
    </>
  );
};

export default DashboardLayout;
