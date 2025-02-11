import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Cards_Team } from "../components/ui/Cards";
import { Cards_News } from "../components/ui/Cards";
import Typography from "../components/ui/Typography";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FormComponent from "../components/ui/FormComponent";

const items = [" "];

export const Contact = () => {
  const mapContainerRef = useRef(null); // Reference to the map container
  const mapInstanceRef = useRef(null); // Reference to store the map instance

  useEffect(() => {
    if (!window.ymaps) {
      console.error("Yandex Maps API is not loaded.");
      return;
    }

    window.ymaps.ready(() => {
      if (!mapInstanceRef.current && mapContainerRef.current) {
        // ✅ Create the map inside the referenced container
        mapInstanceRef.current = new window.ymaps.Map(mapContainerRef.current, {
          center: [55.751244, 37.618423], // Moscow
          zoom: 10,
        });

        const placemark = new window.ymaps.Placemark([55.751244, 37.618423]);
        mapInstanceRef.current.geoObjects.add(placemark);
      }
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy(); // ✅ Cleanup when component unmounts
        mapInstanceRef.current = null;
      }
    };
  }, []);
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
              We are here for your care.
            </Typography>
            <Typography variant="h2">Contact Us</Typography>
          </div>

          <div className="flex flex-row justify-end sm:justify-start mt-1">
            <Typography variant="p" className="cursor-pointer">
              <Link to="/About">Home</Link>
            </Typography>

            <span className="mx-1">|</span>
            <Typography variant="p" className="text-red-500">
              Contact
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex">
        <FormComponent />
      </div>
      <div
        ref={mapContainerRef}
        className="relative mt-10" 
        style={{ width: "100%", height: "40em"}}
      ></div>
    </>
  );
};
