import * as React from "react";

import { cn } from "@/lib/utils";
const Cards = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-cards text-cards-foreground grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      className
    )}
    {...props}
  />
));
Cards.displayName = "Cards";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `flex flex-col gap-2 bg-card text-card-foreground transition-all`,
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardImage = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full text-center mx-auto", className)}
    {...props}
  />
));
CardImage.displayName = "CardImage";

const CardImg = React.forwardRef(({ className, src, ...props }, ref) => (
  <img
    className={cn("text-center mx-auto", className)}
    {...props}
    src={src}
    alt=""
  />
));
CardImg.displayName = "CardImg";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-semibold leading-none transition-all duration-300  tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm transition-all duration-300", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs transition-all duration-300", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Cards,
  Card,
  CardImage,
  CardImg,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
