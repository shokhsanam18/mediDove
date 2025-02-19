import React from "react";
import { X } from "lucide-react";
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
  {
    title: "Contact Us",
    href: "/ContactUs",
  },
];

export const Sidebar = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebarStore();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
        aria-hidden={!isOpen}
      />
      <div
        className={`fixed top-0 right-0 w-64 h-full p-6 bg-white shadow-lg z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-label="Sidebar"
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 p-2 text-black rounded hover:text-slate-600"
          aria-label="Close sidebar"
        >
          <X />
        </button>
        <ul className="mt-12 text-lg">
          {pages.map((page) => (
            <li key={page.title} className=" relative  group">
              <Link to={page.href} className="hover:text-red-500 font-semibold">
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
    </>
  );
};
