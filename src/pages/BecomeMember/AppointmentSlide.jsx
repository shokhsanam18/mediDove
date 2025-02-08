import React from "react";
import Typography from "@/components/ui/Typography";
import { Link } from "react-router-dom";

const AppointmentPage = () => {
  return (
    <div
      className="flex items-center h-screen w-full "
      style={{
        backgroundImage: "url('/img/bgbook.jpg')",
        height: "calc(100vh - 150px)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center text-center sm:text-start sm:items-start w-full p-8">
        <div className="flex flex-col items-center sm:items-start w-full">
          <Typography variant="h4">We are here for your care.</Typography>
          <Typography variant="h1">Appointment</Typography>
        </div>

        <div className="flex flex-row justify-end sm:justify-start mt-4">
          <Typography variant="p" className="cursor-pointer">
            <Link to="/About">Home</Link>
          </Typography>

          <span className="mx-1">|</span>
          <Typography variant="p" className="text-red-500">
            Appointment
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
