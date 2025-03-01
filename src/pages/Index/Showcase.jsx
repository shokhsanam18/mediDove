import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Typography from "@/components/ui/Typography";
import { Play, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Showcase = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Carousel className="relative">
      <CarouselContent>
        <CarouselItem
          className="flex items-center h-[85vh] w-full bg-cover bg-center justify-between
        lg:px-20  sm:px-[5%] px-[2%] md:text-left text-center
         bg-white"
          style={{
            backgroundImage: "url('/img/slider-bg-1.jpg')",
          }}
        >
          <div className="flex flex-col w-full gap-6 md:w-2/3 lg:w-1/2">
            <Typography variant="h4" className="text-[#6A7B8F] font-semibold">
              {/* We are here for your care. */}
              {t("index.showcase.title")}
            </Typography>
            <h1
              className={
                "text-6xl font-bold tracking-tight text-[#223645] sm:text-7xl/none"
              }
            >
              {/* Best Care  */}
              {t("index.showcase.bigTitle")}
            </h1>
            <Typography
              variant="p"
              className="text-[#6A7B8F] font-medium text-sm/6"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <div className="flex md:justify-start justify-center items-center gap-6">
              <Link to="/BecomeMember">
                <button className="flex items-center h-16 uppercase w-72 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-[#8fb569] text-white bg-[#e12454] shadow-[2px_2px_3px_#e1245397] hover:shadow-[0px_0px_3px_#8fb569] transition-all duration-300 ease-in-out font-semibold">
                  <span className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full border-2 border-white shadow-md ml-2">
                    <Plus size={20} />
                  </span>
                  <span className="ml-5 text-base uppercase font-semibold tracking-wide">
                    {/* make APPOINTMENT */}
                    {t("index.showcase.button")}
                  </span>
                </button>
              </Link>
              <button
                className="flex items-center justify-center uppercase w-14 h-14 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#8fb569] text-white hover:bg-[#e12454] hover:shadow-[2px_2px_3px_#e1245397] shadow-[0px_0px_3px_#8fb569] transition-all duration-300 ease-in-out font-semibold"
                onClick={() => setIsModalOpen(true)}
              >
                <Play size={20} className="text-white" />
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem
          className="flex items-center h-[85vh] w-full bg-cover bg-center justify-between
        lg:px-20  sm:px-[5%] px-[2%] md:text-left text-center
         bg-white"
          style={{
            backgroundImage: "url('/img/slider-bg-2.jpg')",
          }}
        >
          <div className="flex flex-col w-full gap-6 md:w-2/3 lg:w-1/2">
            <Typography variant="h4" className="text-[#6A7B8F] font-semibold">
              {t("index.showcase.title")} {/* We are here for your care. */}
            </Typography>
            <h1
              className={
                "text-6xl font-bold tracking-tight text-[#223645] sm:text-7xl/none"
              }
            >
              {t("index.showcase.bigTitle")}{" "}
              {/* Best Care &amp; Better Doctor. */}
            </h1>
            <Typography
              variant="p"
              className="text-[#6A7B8F] font-medium text-sm/6"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <div className="flex md:justify-start justify-center items-center gap-6">
              <Link to="/BecomeMember">
                <button className="flex items-center h-16 uppercase w-72 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-[#8fb569] text-white bg-[#e12454] shadow-[2px_2px_3px_#e1245397] hover:shadow-[0px_0px_3px_#8fb569] transition-all duration-300 ease-in-out font-semibold">
                  <span className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full border-2 border-white shadow-md ml-2">
                    <Plus size={20} />
                  </span>
                  <span className="ml-5 text-base uppercase font-semibold tracking-wide">
                    {t("index.showcase.button")} {/* make APPOINTMENT */}
                  </span>
                </button>
              </Link>
              <button
                className="flex items-center justify-center uppercase w-14 h-14 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#8fb569] text-white hover:bg-[#e12454] hover:shadow-[2px_2px_3px_#e1245397] shadow-[0px_0px_3px_#8fb569] transition-all duration-300 ease-in-out font-semibold"
                onClick={() => setIsModalOpen(true)}
              >
                <Play size={20} className="text-white" />
              </button>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative p-4 rounded-lg w-[90%] max-w-2xl">
            <button
              className="absolute top-2 -right-7 text-white text-2xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={40} />
            </button>
            <iframe
              className="w-full h-64 sm:h-96"
              src="https://www.youtube.com/embed/oU_GUAWz52w?start=2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}

      <CarouselPrevious className="hidden lg:block absolute top-1/2 left-4" />
      <CarouselNext className="hidden lg:block absolute top-1/2 right-4" />
    </Carousel>
  );
};

export default Showcase;
