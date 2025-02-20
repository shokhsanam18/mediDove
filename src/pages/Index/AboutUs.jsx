import React, { useState } from "react";
import Typography from "@/components/ui/Typography";
const AboutUs = () => {
  return (
    <section className="w-full max-w-7xl mx-auto lg:px-20  sm:px-[5%] px-[2%] pt-11 pb-16 gap-12 flex flex-col lg:flex-row items-center  bg-white">
      <div className="w-full lg:w-1/2 relative shadow-xl">
        <img src="/img/about-img.jpg" alt="" className="w-full" />
        <img src="/img/medical-brand.png" alt="" className="lg:absolute hidden lg:-right-24 lg:top-1/3" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-7">
        <Typography variant="h4" className="text-[#6A7B8F]">
          About Us
        </Typography>

        <Typography variant="h2">Short Story About MediDove Clinic.</Typography>

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

        <Typography
          variant="p"
          className="leading-relaxed text-sm sm:text-base"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

        <div className="flex items-center gap-6">
            <div>
                <img src="/img/author-ava.png" alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <Typography variant="h4" className="text-[#223645]">
                Rosalina D. Williamson
                </Typography>
                <h5 className="text-[#e1236b] text-xs font-bold tracking-tight sm:text-sm uppercase">
                    founder
                </h5>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
