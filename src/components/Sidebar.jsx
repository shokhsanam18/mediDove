import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSidebarStore } from "@/Store";
import { useTranslation } from "react-i18next";

export const Sidebar = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebarStore();
  const { t } = useTranslation();
  const pages = [
    {
      title: t("navbar.home"),
      href: "/",
    },
    {
      title: t("navbar.about"),
      href: "/About",
      subMenu: [
        {
          title: t("navbar.aboutChildren.tasis"),
          href: "/Tasischilar",
        },
        {
          title: t("navbar.aboutChildren.ustav"),
          href: "/Ustav",
        },
        {
          title: t("navbar.aboutChildren.doctors"),
          href: "/Shifokorlar",
        },
      ],
    },
    {
      title: t("navbar.surgery"),
      href: "/Surgery",
      subMenu: [
        {
          title: t("navbar.itemsChildren.surgery"),
          href: "/Surgery",
        },
        {
          title: t("navbar.itemsChildren.details"),
          href: "/Details",
        },
      ],
    },
    {
      title: t("navbar.blog"),
      href: "/Blog",
    },
    {
      title: t("navbar.news"),
      href: "/News",
    },
    {
      title: t("navbar.member"),
      href: "/BecomeMember",
    },
    {
      title: t("navbar.contact"),
      href: "/ContactUs",
    },
  ];
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
