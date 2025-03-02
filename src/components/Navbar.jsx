import React, { useTransition } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "../assets/logo.png";
import Lang from "../assets/lang.png";
import { Facebook, Youtube, Twitter, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useSidebarStore } from "@/Store";
import { useTranslation } from "react-i18next";

// const components = [
//   {
//     title: t("navbar.aboutChildren.tasis"),
//     href: "/Tasischilar",
//   },
//   {
//     title: "Ustav",
//     href: "/Ustav",
//   },
//   {
//     title: "Shifokorlar",
//     href: "/Shifokorlar",
//   },
// ];

// const items = [
//   {
//     title: "Surgery",
//     href: "/Surgery",
//   },
//   {
//     title: "Details",
//     href: "/Details",
//   },
// ];

// const languages = [
//   {
//     code: "uz",
//     lang: "UZB",
//   },
//   { code: "ru", lang: "RU" },
//   { code: "en", lang: "ENG" },
// ];

export function Navbar() {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const { t } = useTranslation();

  const components = [
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
  ];

  const items = [
    {
      title: t("navbar.itemsChildren.surgery"),
      href: "/Surgery",
    },
    {
      title: t("navbar.itemsChildren.details"),
      href: "/Details",
    },
  ];

  const languages = [
    {
      code: "uz",
      lang: "UZB",
    },
    { code: "ru", lang: "RU" },
    { code: "en", lang: "ENG" },
  ];

  return (
    <div className="sticky top-0 left-0 w-full bg-white shadow-md z-30">
      <NavigationMenu className="lg:max-w-full flex h-28 w-full bg-white shadow-md">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button className="hover:text-slate-600" onClick={toggleSidebar}>
            <Menu />
          </button>
        </div>
        <div className="lg:flex hidden flex-row">
          <NavigationMenuList className="flex justify-between items-center">
            <NavigationMenuItem className="relative group">
              <NavigationMenuTrigger>
                <Link to="/About">
                  {t("navbar.about")} {/* About */}
                </Link>
              </NavigationMenuTrigger>
              <div className="absolute top-full left-0 bg-white border-2 border-t-red-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul className="flex flex-col w-[100px] gap-1 p-4 lg:w-[200px] shadow-lg">
                  {components.map((component) => (
                    <ListItem
                      className="hover:text-red-500 font-semibold hover:bg-white"
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative group">
              <NavigationMenuTrigger>
                <Link to="/Surgery">
                  {t("navbar.surgery")} {/* Surgery types */}
                </Link>
              </NavigationMenuTrigger>
              <div className="absolute top-full left-0 bg-white border-2 border-t-red-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul className="flex flex-col w-[100px] gap-1 p-4 lg:w-[200px] shadow-lg">
                  {items.map((item) => (
                    <ListItem
                      className="hover:text-red-500 font-semibold hover:bg-white"
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    ></ListItem>
                  ))}
                </ul>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/News">
                  {t("navbar.news")} {/* News */}
                </Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/BecomeMember">
                  {t("navbar.member")} {/* Become a member */}
                </Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/Blog">
                  {t("navbar.blog")} {/* Blog */}
                </Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/ContactUs">
                  {t("navbar.contact")} {/* Contact us */}
                </Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Facebook />
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Youtube />
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Twitter />
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative group">
              <NavigationMenuTrigger className="">
                <img
                  src={Lang}
                  alt=""
                  width="50px"
                  height="50px"
                  className=""
                />
              </NavigationMenuTrigger>
              <div className="absolute top-full left-0 bg-white border-2 border-t-red-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul className="flex flex-col w-[100px] gap-1 p-3 lg:w-[80px] shadow-lg">
                  {languages.map((language) => (
                    <ListItem>
                      <button
                        // className="hover:text-red-500 font-semibold bg-white"
                        className={
                          language.code === i18n.language
                            ? "selected hover:text-red-500 font-semibold bg-white w-full"
                            : "hover:text-red-500 font-semibold bg-white w-full"
                        }
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                      >
                        {language.lang}
                      </button>
                    </ListItem>
                  ))}
                </ul>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
