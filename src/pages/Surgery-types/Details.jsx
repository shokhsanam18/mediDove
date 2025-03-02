import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Typography from "@/components/ui/Typography";
import bgImage from "@/assets/photo_2025-02-08_12-54-53.jpg";
import { useTranslation } from "react-i18next";

export const Details = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div
        className="w-full h-[400px] sm:h-[500px] flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between w-full">
          <div className="flex flex-col">
            <Typography
              variant="p"
              className="text-[#6A7B8F] text-sm sm:text-base mb-2"
            >
              {t("details.main.title")}
            </Typography>
            <Typography variant="h1" className="text-black font-bold">
            {t("details.main.showcase")}
            </Typography>
          </div>
          <div className="flex items-center">
            <Link to="/" className="no-underline">
              <Typography variant="p" className="text-gray-600">
              {t("details.main.button1")}
              </Typography>
            </Link>
            <span className="mx-2">|</span>
            <Link to="/About" className="no-underline">
              <Typography variant="p" className="text-red-600 font-semibold">
              {t("details.main.button2")}
              </Typography>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-20"></div>
    </div>
  );
};
