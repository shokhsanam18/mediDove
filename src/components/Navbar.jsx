import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "../assets/logo.png";
import Lang from "../assets/lang.png";
import { Facebook, Youtube, Linkedin, Twitter } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
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

const languages = [
  {
    lang: "UZB",
  },
  {
    lang: "RU",
  },
  {
    lang: "ENG",
  },
];

export function Navbar() {
  return (
    <div className="hidden lg:flex">
      <NavigationMenu className="lg:max-w-full flex h-28 w-full bg-white shadow-md">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="" />
        </div>
        <div className="flex flex-row">
          <NavigationMenuList className="flex justify-between items-center">
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[100px] gap-1 p-4 lg:w-[200px]  shadow-lg ">
                  {components.map((component) => (
                    <ListItem
                      className="hover:text-red-500 font-semibold hover:bg-white"
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Surgery Types</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="flex flex-col w-[100px] gap-1 p-4 lg:w-[200px]">
                  {items.map((item) => (
                    <ListItem
                      className="hover:text-red-500  font-semibold hover:bg-white"
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/News">News</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/BecomeMember">Become a member</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/Blog">Blog</Link>
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
                <Linkedin />
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Twitter />
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <img
                  src={Lang}
                  alt=""
                  width="50px"
                  height="50px"
                  className=""
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[100px] gap-1 p-4 lg:w-[200px]  shadow-lg ">
                  {languages.map((language) => (
                    <ListItem
                      className="hover:text-red-500 font-semibold bg-white"
                      key={language.lang}
                      title={language.lang}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
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
              "block select-none space-y-1  p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
