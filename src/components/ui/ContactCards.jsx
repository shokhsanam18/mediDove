import * as React from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";

export const ContactCardOne = () => {
  return (
    <div
      className="flex flex-col justify-center gap-6
items-center border border-[#EAEDFF] w-[30%] h-[22em]"
    >
      <div className="bg-[#8FB569] w-32 h-32 rounded-full flex items-center justify-center border-white border-8 shadow-[0_20px_30px_rgba(0,0,0,0.2)] dark:bg-slate-800">
        <Mail className="w-11 h-11 text-white" />
      </div>

      <h1
        className="text-[#223645] text-[26px] font-semibold"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Mail Here
      </h1>

      <div className="flex flex-col items-center">
        <h3
          className="text-[#647589] text-[14px] font-normal
"
          style={{ fontFamily: "Rubik,sans-serif" }}
        >
          Admin@BasicTheme.com
        </h3>
        <h3
          className="text-[#647589] text-[14px] font-normal pt-[5px]
"
          style={{ fontFamily: "Rubik,sans-serif" }}
        >
          Info@Themepur.com
        </h3>
      </div>
    </div>
  );
};

export const ContactCardTwo = () => {
  return (
    <div
      className="flex flex-col justify-center gap-6
  items-center border border-[#EAEDFF] w-[30%] h-[22em]"
    >
      <div className="bg-[#8FB569] w-32 h-32 rounded-full flex items-center justify-center border-white border-8 shadow-[0_20px_30px_rgba(0,0,0,0.2)] dark:bg-slate-800">
        <Phone className="w-11 h-11 text-white" />
      </div>

      <h1
        className="text-[#223645] text-[26px] font-semibold"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Mail Here
      </h1>

      <div className="flex flex-col items-center">
        <h3
          className="text-[#647589] text-[14px] font-normal
  "
          style={{ fontFamily: "Rubik,sans-serif" }}
        >
          +8 (123) 985 789
        </h3>
        <h3
          className="text-[#647589] text-[14px] font-normal pt-[5px]
  "
          style={{ fontFamily: "Rubik,sans-serif" }}
        >
          +787 878897 87
        </h3>
      </div>
    </div>
  );
};
