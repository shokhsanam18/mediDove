import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import backgroundImage from "@/assets/appointment.ff3ad7059211248ce482.jpg";
import Typography from "@/components/ui/Typography";
import bgImage from "@/assets/photo_2025-02-08_12-54-53.jpg";

export const Tasischilar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
              We are here for your care.
            </Typography>
            <Typography variant="h1" className="text-black font-bold">
              Ta'sischilar
            </Typography>
          </div>
          <div className="flex items-center">
            <Link to="/" className="no-underline">
              <Typography variant="p" className="text-gray-600">
                Home
              </Typography>
            </Link>
            <span className="mx-2">|</span>
            <Link to="/About" className="no-underline">
              <Typography variant="p" className="text-red-600 font-semibold">
                About
              </Typography>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative z-10 bg-white p-10 max-w-3xl w-full lg:max-w-xl lg:p-14 rounded-none -ml-80 max-h-[550px]">
          <h3 className="text-red-600 font-bold text-sm mb-2">Our Approach</h3>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            If you are a patient
            <br />
            seeking quality.
          </h1>
          <p className="text-gray-600 mt-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <ul className="mt-4 space-y-3">
            {Array(4).fill(
              <li className="flex items-center text-gray-700">
                <i className="fa-regular fa-circle-check text-green-500 mr-3 transition-colors duration-300 hover:text-green-700 hover:bg-green-200 rounded-full p-1"></i>
                Ut enim ad minim veniam, quis nostrud exercit.
              </li>
            )}
          </ul>

          <div className="mt-6 w-full">
            <Link to="/ContactUs" state={{ scrollTo: "FormComponent" }}>
              <Button
                variant="destructive"
                size="lg"
                className="w-full hover:bg-green-500 hover:rounded-none"
                onClick={() => navigate("/ContactUs")}
              >
                Make Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
