import * as React from "react";

import { cn } from "@/lib/utils";
const Cards = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-cards text-cards-foreground flex gap-4",
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
      "rounded-lg border flex flex-col gap-2 bg-card text-card-foreground transition-all hover:shadow-2xl hover:shadow-red-500",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardImage = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full-width text-center", className)}
    {...props}
  />
));
CardImage.displayName = "CardImage";

const CardImg = React.forwardRef(({ className, src, ...props }, ref) => (
  <img
    className={cn("w-full-width text-center", className)}
    {...props}
    src={src} alt=""
  />
));
CardImg.displayName = "CardImg";



const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";


const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {Cards, Card, CardImage, CardImg, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };