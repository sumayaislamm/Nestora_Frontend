import { Navbar } from "@/components/navbar";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar></Navbar>
      PublicLayout
      {children}
    </>
  );
};

export default PublicLayout;
