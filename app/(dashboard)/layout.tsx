import { Navbar } from "@/components/navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar></Navbar>
      DashboardLayout
      {children}
    </>
  );
};

export default DashboardLayout;
