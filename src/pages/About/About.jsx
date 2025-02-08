import React from "react";
import Typography from "@/components/ui/Typography";
import { Card, CardImg } from "@/components/ui/Card";
import aboutImg from "@/assets/about-img.jpg";
import missionIcon from "@/assets/destination-icon-1.png";
import visionIcon from "@/assets/destination-icon-2.png";

export const About = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        <Card className="w-full lg:w-1/2">
          <CardImg
            src={aboutImg}
            className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-full object-cover"
          />
        </Card>

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
    </div>
  );
};
