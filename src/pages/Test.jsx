import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "../assets/logo.png";

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
    href: "/SurgeryIndex",
  },
  {
    title: "Details",
    href: "/Details",
  },
];

export function NavigationMenuDynamic() {
  return (
    <NavigationMenu className="lg:max-w-full flex h-24 w-full bg-slate-400">
      <NavigationMenuList className="flex justify-between items-center">
        <NavigationMenuItem>
          <img src={Logo} alt="" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[100px] gap-1 p-4 lg:w-[200px] shadow-lg ">
              {components.map((component) => (
                <ListItem
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
          <NavigationMenuContent>
            <ul className="flex flex-col w-[100px] gap-1 p-4 lg:w-[200px]">
              {items.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link to="/News">
            <button className={navigationMenuTriggerStyle()}>News</button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/BecomeMember">
            <button className={navigationMenuTriggerStyle()}>
              Become a member
            </button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/Blog">
            <button className={navigationMenuTriggerStyle()}>Blog</button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
