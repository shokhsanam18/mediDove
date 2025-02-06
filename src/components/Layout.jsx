import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <div style={{ display: "flex flex-col" }}>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
};
