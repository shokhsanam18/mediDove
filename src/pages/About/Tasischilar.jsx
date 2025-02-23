import { Link } from "react-router-dom";
import React from "react";
import { Button } from "@/components/ui/button";
import backgroundImage from "@/assets/appointment.ff3ad7059211248ce482.jpg";

export const Tasischilar = () => {
  return (
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
          <li className="flex items-center text-gray-700">
            <i className="fa-regular fa-circle-check text-green-500 mr-3 transition-colors duration-300 hover:text-green-700 hover:bg-green-200 rounded-full p-1"></i>
            Ut enim ad minim veniam, quis nostrud exercit.
          </li>
          <li className="flex items-center text-gray-700">
            <i className="fa-regular fa-circle-check text-green-500 mr-3 transition-colors duration-300 hover:text-green-700 hover:bg-green-200 rounded-full p-1"></i>
            Ut enim ad minim veniam, quis nostrud exercit.
          </li>
          <li className="flex items-center text-gray-700">
            <i className="fa-regular fa-circle-check text-green-500 mr-3 transition-colors duration-300 hover:text-green-700 hover:bg-green-200 rounded-full p-1"></i>
            Ut enim ad minim veniam, quis nostrud exercit.
          </li>
          <li className="flex items-center text-gray-700">
            <i className="fa-regular fa-circle-check text-green-500 mr-3 transition-colors duration-300 hover:text-green-700 hover:bg-green-200 rounded-full p-1"></i>
            Ut enim ad minim veniam, quis nostrud exercit.
          </li>
        </ul>

        <div className="mt-6 w-full">
          <Link to="/ContactUs" state={{ scrollTo: "FormComponent" }}>
            <Button
              variant="destructive"
              size="lg"
              className="w-full hover:bg-green-500 hover:rounded-none"
            >
              Make Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
