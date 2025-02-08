import React, { useState } from "react";
import Typography from "@/components/ui/Typography";
import { Card, CardImg } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-img.jpg";
import missionIcon from "@/assets/destination-icon-1.png";
import visionIcon from "@/assets/destination-icon-2.png";

export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="relative w-full lg:w-1/2">
          <Card>
            <CardImg
              src={aboutImg}
              className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-full object-cover"
            />
          </Card>
          <Button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             bg-white hover:bg-red-500 w-24 h-24 rounded-full shadow-md flex items-center justify-center"
            onClick={() => setIsModalOpen(true)}
          >
            <i className="fa-solid fa-play text-black text-2xl"></i>
          </Button>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          <Typography variant="h4" className="text-[#6A7B8F]">
            About Us
          </Typography>

          <div>
            <Typography variant="h2">Short Story About</Typography>
            <Typography variant="h2" className="text-[#223645]">
              MediDove Clinic.
            </Typography>
          </div>

          <Typography
            variant="p"
            className="leading-relaxed text-sm sm:text-base"
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.
          </Typography>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img
                src={missionIcon}
                alt="Mission Icon"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <div className="flex-1">
                <Typography variant="h4" className="text-[#223645]">
                  Our Mission
                </Typography>
                <Typography variant="p">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse.
                </Typography>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img
                src={visionIcon}
                alt="Vision Icon"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <div className="flex-1">
                <Typography variant="h4" className="text-[#223645]">
                  Our Vision
                </Typography>
                <Typography variant="p">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="relative bg-white p-4 rounded-lg w-[90%] max-w-2xl">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <iframe
              className="w-full h-64 sm:h-96"
              src="https://www.youtube.com/embed/I3u3lFA9GX4?si=4aSF7MrT3hLsnI0f"
              title="YouTube video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};
