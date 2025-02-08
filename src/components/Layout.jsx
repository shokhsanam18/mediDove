import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
};
