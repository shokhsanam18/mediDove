import React from "react";
import {
  Cards,
  Card,
  CardImage,
  CardImg,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Typography from "@/components/ui/Typography";
import bgImage from "@/assets/photo_2025-02-08_12-54-53.jpg";

const doctors = [
  {
    name: "Rosalina D. Williamson",
    role: "FOUNDER",
    img: "/src/assets/member1.png",
    bg: "bg-green-100",
  },
  {
    name: "Diconda Piran Will",
    role: "DENTIST",
    img: "/src/assets/member2.png",
    bg: "bg-gray-100",
  },
  {
    name: "Hulk M. Kenbon",
    role: "NEUROLOGIST",
    img: "/src/assets/member3.png",
    bg: "bg-gray-100",
  },
  {
    name: "Haliam Z. Dicolaz",
    role: "CONSULTANT",
    img: "/src/assets/member4.png",
    bg: "bg-gray-100",
  },
  {
    name: "Nicolas D. Case",
    role: "DENTIST",
    img: "/src/assets/member5.png",
    bg: "bg-blue-100",
  },
  {
    name: "Phumdon H. Norman",
    role: "NEUROLOGIST",
    img: "/src/assets/member6.png",
    bg: "bg-blue-100",
  },
];

export const Shifokorlar = () => {
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
              Shifokorlar
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
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs md:text-sm text-gray-400">Our Team</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-700">
              A Professional &<br className="hidden md:block" /> Care Provider
            </h2>
            <div className="w-12 md:w-16 h-1 border-b-4 border-red-500 mt-2 mx-auto md:mx-0"></div>
          </div>

          <Button className="mt-4 md:mt-0 bg-red-500 text-white px-5 py-3 md:px-7 md:py-4 rounded-full flex items-center gap-2 shadow-lg hover:bg-red-600">
            <span className="text-lg md:text-xl font-bold">+</span> MAKE
            APPOINTMENT
          </Button>
        </div>

        <Cards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-3"
            >
              <div
                className={`relative ${doctor.bg} w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full flex items-center justify-center`}
              >
                <CardImage className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-lg">
                  <CardImg
                    src={doctor.img}
                    className="w-full h-full object-cover"
                  />
                </CardImage>

                <span className="absolute bottom-0 right-1 translate-x-2 translate-y-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-green-500 text-white rounded-full text-lg md:text-xl border-4 border-white shadow-md cursor-pointer">
                  +
                </span>
              </div>

              <CardTitle className="text-base md:text-lg lg:text-xl font-semibold mt-3 text-gray-800">
                {doctor.name}
              </CardTitle>

              <CardDescription className="text-xs md:text-sm text-red-500 uppercase mt-1">
                {doctor.role}
              </CardDescription>
            </Card>
          ))}
        </Cards>
      </section>
    </div>
  );
};
