// import React from "react";
// import { Outlet } from "react-router-dom";
// import { Navbar } from "./Navbar";

// export const Layout = () => {
//   return (
//     <>
//       <div
//         style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//       >
//         <Navbar />
//         <Outlet />
//         {/* <Footer /> */}
//       </div>
//     </>
//   );
// };

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

import React from "react";

export const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <Outlet />
      <SidebarProvider>
        <AppSidebar />

        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};
