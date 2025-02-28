import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Cards_Team } from "../components/ui/Cards";
import { Cards_News } from "../components/ui/Cards";
import Typography from "../components/ui/Typography";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faComment } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FormComponent from "../components/ui/FormComponent";
import { ContactCardOne } from "../components/ui/ContactCards";
import { ContactCardTwo } from "../components/ui/ContactCards";
import { MapPin } from "lucide-react";

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const items = [" "];

export const Contact = () => {
  const location = useLocation();
  const formRef = useRef(null);
    const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.state?.scrollTo === "FormComponent") {
      setTimeout(() => {
        if (formRef.current) {
          const yOffset = -30;
          const y =
            formRef.current.getBoundingClientRect().top +
            window.scrollY +
            yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);

  const [isMounted, setIsMounted] = useState(false);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const scrollToMap = () => {
    mapContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !window.ymaps || !mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      window.ymaps.ready(() => {
        mapInstanceRef.current = new window.ymaps.Map(mapContainerRef.current, {
          center: [39.718373, 66.933489],
          zoom: 15,
        });

        const placemark = new window.ymaps.Placemark([39.718373, 66.933489]);
        mapInstanceRef.current.geoObjects.add(placemark);
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [isMounted]);

  return (
    <>
      <div
        className="flex items-center h-screen w-full"
        style={{
          height: "calc(100vh - 150px)",
          backgroundImage: "url('/img/backimg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" flex flex-col md:flex-row items-center text-center  w-full p-40">
          <div className="flex flex-col items-center sm:items-start w-full">
            <Typography variant="h4" className="mb-10  ">
            {t("contactus.main.title")}
            </Typography>
            <Typography variant="h2">{t("contactus.main.showcase")}</Typography>
          </div>

          <div className="flex flex-row justify-end sm:justify-start mt-1">
            <Typography variant="p" className="cursor-pointer">
              <Link to="/About">{t("contactus.main.button1")}</Link>
            </Typography>

            <span className="mx-1">|</span>
            <Typography variant="p" className="text-red-500">
            <Link to="/ContactUs">{t("contactus.main.button2")}</Link>
            </Typography>
          </div>
        </div>
      </div>
      <div className="sm:flex-row flex flex-col pt-24 pb-24 pl-[10%] pr-[10%] justify-between w-full bg-[#FFFFFF] ">
        <ContactCardOne />

        <button
          onClick={scrollToMap}
          className="flex flex-col justify-center gap-6
  items-center border border-[#EAEDFF] sm:w-[30%] w-[100%] h-[22em]"
        >
          <div className="bg-[#8FB569] w-32 h-32 rounded-full flex items-center justify-center border-white border-8 shadow-[0_20px_30px_rgba(0,0,0,0.2)] dark:bg-slate-800">
            <MapPin className="w-11 h-11 text-white" />
          </div>

          <h1
            className="text-[#223645] text-[26px] font-semibold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Visit Here
          </h1>

          <div className="flex flex-col items-center">
            <h3
              className="text-[#647589] text-[14px] font-normal
  "
              style={{ fontFamily: "Rubik,sans-serif" }}
            >
              10, 75, Qorasuv dahasi{" "}
            </h3>
            <h3
              className="text-[#647589] text-[14px] font-normal pt-[5px]
  "
              style={{ fontFamily: "Rubik,sans-serif" }}
            >
              Samarqand, O'zbekiston
            </h3>
          </div>
        </button>
        <ContactCardTwo />
      </div>
      <div ref={formRef}>
        <FormComponent />
      </div>
      <div
        ref={mapContainerRef}
        className="relative mt-10 w-full "
        style={{ height: "40em" }}
      ></div>
    </>
  );
};
