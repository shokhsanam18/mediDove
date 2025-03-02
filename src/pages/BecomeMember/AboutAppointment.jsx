import React, { useState } from "react";
import Typography from "@/components/ui/Typography";
import { Card, CardImg } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import appoinmentpagephoto from "@/assets/appoinmentpagephoto.png";
import missionIcon from "@/assets/destination-icon-1.png";
import visionIcon from "@/assets/destination-icon-2.png";
import bgImage from "@/assets/photo_2025-02-08_12-54-53.jpg";
import { useTranslation } from "react-i18next";

export const AboutAppointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 h-[550px]">
            <Card
              className="h-full lg:h-full flex flex-col justify-center items-center bg-cover bg-center"
              style={{ backgroundImage: `url(${appoinmentpagephoto})` }}
            >
              <Button
                className="bg-white hover:bg-red-500 w-20 h-20 rounded-full shadow-md flex items-center justify-center"
                onClick={() => setIsModalOpen(true)}
              >
                <i className="fa-solid fa-play text-black text-xl"></i>
              </Button>
            </Card>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            <Typography variant="h4" className="text-[#6A7B8F]">
          { t("about.main.showcase")} {/* About Us */} 
            </Typography>

            <div>
              {/* <Typography variant="h2">Short Story About</Typography> */}
              <Typography variant="h2" className="text-[#223645]">
           {t("about.main.subtitle")} {/* MediDove Clinic. */}
              </Typography>
            </div>

            <Typography
              variant="p"
              className="leading-relaxed text-sm sm:text-base"
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia.
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
                    {t("about.main.mission")} {/* Our Mission */}
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
                    {t("about.main.vision")} {/* Our Vision */}
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

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-5">
          <div className="relative bg-white p-4 rounded-lg w-[90%] max-w-2xl">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              ❌
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
