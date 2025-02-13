import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSidebarStore } from "@/Store";

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
    title: "Surgery types",
    href: "/Surgery",
    subMenu: [
      {
        title: "Surgery",
        href: "/Surgery",
      },
      {
        title: "Details",
        href: "/Details",
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

export const Sidebar = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebarStore();

  return (
    <>
      <div
        className="sidebar-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-end transition-opacity duration-300 "
        onClick={closeSidebar}
        aria-hidden={!isOpen}
      >
        <div
          className={`sidebar bg-white w-64 h-full p-4 shadow-lg relative transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="navigation"
          aria-label="Sidebar"
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 left-4 p-2 text-black rounded"
            aria-label="Close sidebar"
          >
            <X />
          </button>
          <ul className="mt-12 text-lg">
            {pages.map((page) => (
              <li key={page.title} className="mb-2 relative group">
                <Link
                  to={page.href}
                  className="hover:text-red-500 font-semibold"
                >
                  {page.title}
                </Link>
                {page.subMenu && (
                  <ul className="bg-white p-2 text-sm">
                    {page.subMenu.map((subPage) => (
                      <li key={subPage.title} className="mb-2">
                        <Link
                          to={subPage.href}
                          className="hover:text-red-500 font-semibold"
                        >
                          {subPage.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
