import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/About",
    subMenu: [
      {
        title: "Ta'sischilar",
        href: "/Tasischilar",
      },
      {
        title: "Ustav",
        href: "/Ustav",
      },
      {
        title: "Shifokorlar",
        href: "/Shifokorlar",
      },
    ],
  },

  {
    title: "Blog",
    href: "/Blog",
  },
  {
    title: "News",
    href: "/News",
  },
  {
    title: "Become a Member",
    href: "/BecomeMember",
  },
];

const items = [
  {
    title: "Surgery",
    href: "/Surgery",
  },
  {
    title: "Details",
    href: "/Details",
  },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = (e) => {
    if (e.target.className.includes("sidebar-overlay")) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 right-4 z-50 p-2 text-black rounded"
        >
          <Menu />
        </button>
      )}
      {isOpen && (
        <div
          className="sidebar-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-end"
          onClick={closeSidebar}
        >
          <div className="sidebar translate-x-0 transition-all bg-white w-64 h-full p-4 shadow-lg relative">
            <button
              onClick={toggleSidebar}
              className="absolute top-4 left-4 p-2 text-black rounded"
            >
              <X />
            </button>
            {/* <ul className="mt-12 text-lg">
              {pages.map((page) => (
                <li key={page.title} className="mb-4">
                  <button className="hover:text-red-500 font-semibold">
                    <Link to={page.href}>{page.title}</Link>
                  </button>
                </li>
              ))}
            </ul> */}{" "}
            <ul className="mt-12 text-base">
              {pages.map((page) => (
                <li key={page.title} className="mb-4 relative group">
                  <button className="hover:text-red-500 font-semibold">
                    <Link to={page.href}>{page.title}</Link>
                  </button>
                  {page.subMenu && (
                    <ul className="absolute left-0 top-full bg-white shadow-lg p-2 hidden group-hover:block">
                      {page.subMenu.map((subPage) => (
                        <li
                          key={subPage.title}
                          className="mb-2 transition-colors"
                        >
                          <button className="hover:text-red-500 font-semibold">
                            <Link to={subPage.href}>{subPage.title}</Link>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
