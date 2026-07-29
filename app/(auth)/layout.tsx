

import { Navbar } from "@/components/navbar";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar></Navbar>
      {children}
    </>
  );
};

export default AuthLayout;
