import React from "react";
import { cn } from "@/lib/utils";

const Typography = ({ variant = "h2", children, className, ...props }) => {
  const variants = {
    h2: "text-3xl font-bold tracking-tight text-[#223645] sm:text-6xl",
    h4: "text-2xl font-semibold tracking-tight text-[#647589] sm:text-xl",
    p: "text-base text-[#6A7B8F]",
  };

  const chosenVariant = variants[variant] || variants.h2;
  const Element = variant === "p" ? "p" : "h2";

  return <Element className={cn(chosenVariant, className)}>{children}</Element>;
};

export default Typography;
