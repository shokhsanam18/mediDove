import React, { useState, useTransition } from "react";
import Typography from "@/components/ui/Typography";
import { Card, CardImg } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-img.jpg";
import missionIcon from "@/assets/destination-icon-1.png";
import visionIcon from "@/assets/destination-icon-2.png";
import bgImage from "@/assets/photo_2025-02-08_12-54-53.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div
        className=" w-full h-[400px] sm:h-[500px] flex items-center"
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
              {t("about.main.title")} {/* We are here for your care. */}
            </Typography>
            <Typography variant="h1" className="text-black font-bold">
              {t("about.main.showcase")} {/* About Us */}
            </Typography>
          </div>

          <div className="flex items-center">
            <Typography variant="p" className="text-gray-600">
              <Link to="/"> {t("about.main.button1")}</Link> {/* Home  */}
              <span className="mx-2">|</span>
            </Typography>
            <Typography variant="p" className="text-red-600 font-semibold">
              {" "}
              <Link to="/About"> {t("about.main.button2")}</Link>
              {/* About */}
            </Typography>
          </div>
        </div>
      </div>

      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/2">
            {/* <Card> */}
            {/* <CardImg
                src={aboutImg}
                className="w-full  h-auto sm:h-[400px] md:h-[500px] lg:h-full object-cover"
              /> */}
            <img
              src={aboutImg}
              alt=""
              className="w-full  h-auto sm:h-[400px] md:h-[500px] lg:h-full object-cover"
            />
            <Button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              bg-white hover:bg-red-500 w-20 h-20 rounded-full shadow-md flex items-center justify-center"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="fa-solid fa-play text-black text-xl"></i>
            </Button>
            {/* </Card> */}

            {/* <Button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              bg-white hover:bg-red-500 w-20 h-20 rounded-full shadow-md flex items-center justify-center"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="fa-solid fa-play text-black text-xl"></i>
            </Button> */}
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            <Typography variant="h4" className="text-[#6A7B8F]">
              {t("about.main.showcase")} {/* About Us */}
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
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
