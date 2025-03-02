import * as React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../../components/ui/SearchBar";

import img1 from "/img/image.png";
import img2 from "/img/image copy.png";
import img3 from "/img/image copy 2.png";
import img4 from "/img/image copy 3.png";
import img5 from "/img/image copy 4.png";
import img6 from "/img/image copy 5.png";
import img7 from "/img/image copy 6.png";
import img8 from "/img/image copy 7.png";
import img9 from "/img/image copy 8.png";
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const items = [" "];

export const NewsCardOne = () => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Search Objects
      </h1>
      <div>
        {" "}
        <SearchBar />
        <Outlet />
      </div>
      {/* <div>
        {" "}
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
        <ul className="mt-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div> */}
    </div>
  );
};

export const NewsCardTwo = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        About Me
      </h1>
      <div className="flex flex-col items-center w-full">
        <img
          src="/img/image copy 14.png"
          alt=""
          className="max-w-full transition-all duration-300 ease-out rounded-full mb-6"
        />
        <h4
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-[20px] tracking-[1px] text-[#223645] font-poppins font-semibold leading-[1.1] mt-0 mb-2 text-center"
        >
          Duxtir aka
        </h4>
        <p
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-[14px] text-[#647589] font-rubik font-normal leading-[26px] mb-[15px] text-center"
        >
          Bemorlarning sog‘lig‘ini yaxshilash maqsadida mehribon g‘amxo‘rlik
          ko‘rsatadigan va jamoaviy hamkorlikni rivojlantiradigan fidoyi
          tibbiyot xodimi.
        </p>
        <div className="flex gap-x-2 text-[#8fb569]">
          <a href="https://www.instagram.com/scatchz/">
            <i className="fab fa-facebook-f transition-all duration-300 ease-out hover:text-[#E12454]"></i>
          </a>
          <a href="https://www.instagram.com/scatchz/">
            <i className="fab fa-twitter transition-all duration-300 ease-out hover:text-[#E12454]"></i>
          </a>
          <a href="https://www.instagram.com/scatchz/">
            <i className="fab fab fa-linkedin-in transition-all duration-300 ease-out hover:text-[#E12454]"></i>
          </a>
          <a href="https://www.instagram.com/scatchz/">
            <i className="fab fab fa-behance transition-all duration-300 ease-out hover:text-[#E12454]"></i>
          </a>
          <a href="https://www.instagram.com/scatchz/">
            <i className="fab fa-youtube transition-all duration-300 ease-out hover:text-[#E12454]"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export const NewsCardThree = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Popular Feeds
      </h1>
      <ul className="block list-disc my-[1em] mx-0 [unicode-bidi:isolate]">
        <li className="my-4 overflow-hidden list-none">
          <a
            href="#"
            className="text-[#10111e] outline-none no-underline transition-all duration-300 ease-out float-left"
          >
            <img
              src="/img/image copy 13.png"
              alt=""
              className="w-[80px] h-[80px] max-w-full rounded-full mr-[15px] transition-all duration-300 ease-out"
            />
          </a>
          <div className="">
            <h6
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-[16px] text-[#223645] font-poppins font-semibold leading-[1.1] mt-0 mb-[10px]"
            >
              <a href="#">
                Advancements in Modern Medicine: A Breakthrough in Patient Care
              </a>
            </h6>
            <div
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-[14px] text-[#647589] font-rubik font-normal"
            >
              December 18, 2021
            </div>
          </div>
        </li>

        <li className="py-4 overflow-hidden list-none border-t border-[#eaedff]">
          <a
            href="#"
            className="text-[#10111e] outline-none no-underline transition-all duration-300 ease-out float-left"
          >
            <img
              src="/img/image copy 15.png"
              alt=""
              className="w-[80px] h-[80px] max-w-full rounded-full mr-[15px] transition-all duration-300 ease-out"
            />
          </a>
          <div className="">
            <h6
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-[16px] text-[#223645] font-poppins font-semibold leading-[1.1] mt-0 mb-[10px]"
            >
              <a href="#">
              Breakthroughs in Modern Medical Science
              </a>
            </h6>
            <div
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-[14px] text-[#647589] font-rubik font-normal"
            >
              December 18, 2021
            </div>
          </div>
        </li>

        <li className="py-4 overflow-hidden list-none border-t border-[#eaedff]">
          <a
            href="#"
            className="text-[#10111e] outline-none no-underline transition-all duration-300 ease-out float-left"
          >
            <img
              src="/img/image copy 16.png"
              alt=""
              className="w-[80px] h-[80px] max-w-full rounded-full mr-[15px] transition-all duration-300 ease-out"
            />
          </a>
          <div className="">
            <h6
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-[16px] text-[#223645] font-poppins font-semibold leading-[1.1] mt-0 mb-[10px]"
            >
              <a href="#">
              Breakthroughs in Modern Medical Science
              </a>
            </h6>
            <div
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-[14px] text-[#647589] font-rubik font-normal"
            >
              December 18, 2021
            </div>
          </div>
        </li>

      </ul>
    </div>
  );
};

export const NewsCardFour = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Categories
      </h1>
      <ul className="text-[#647589] font-rubik text-sm not-italic font-normal block list-disc my-4 [unicode-bidi:isolate] w-full">
        <li className="w-full overflow-hidden text-[#647589] font-rubik text-sm not-italic font-normal">
          <a
            href="https://www.instagram.com/scatchz/"
            className="py-[15px] border-b border-[#eaedff] flex justify-between transition-all duration-300 ease-out hover:text-[#E12454] text-[#647589] font-rubik text-sm not-italic font-normal"
          >
            Lifestyle
            <span className="f-right">78</span>
          </a>
          <a
            href="https://www.instagram.com/scatchz/"
            className="py-[15px] border-b border-[#eaedff] flex justify-between transition-all duration-300 ease-out hover:text-[#E12454] text-[#647589] font-rubik text-sm not-italic font-normal"
          >
            Travel
            <span className="f-right">42</span>
          </a>
          <a
            href="https://www.instagram.com/scatchz/"
            className="py-[15px] border-b border-[#eaedff] flex justify-between transition-all duration-300 ease-out hover:text-[#E12454] text-[#647589] font-rubik text-sm not-italic font-normal"
          >
            Fashion
            <span className="f-right">32</span>
          </a>
          <a
            href="https://www.instagram.com/scatchz/"
            className="py-[15px] border-b border-[#eaedff] flex justify-between transition-all duration-300 ease-out hover:text-[#E12454] text-[#647589] font-rubik text-sm not-italic font-normal"
          >
            Music
            <span className="f-right">85</span>
          </a>
          <a
            href="https://www.instagram.com/scatchz/"
            className="pt-[15px] flex justify-between transition-all duration-300 ease-out hover:text-[#E12454] text-[#647589] font-rubik text-sm not-italic font-normal"
          >
            Branding
            <span className="f-right">05</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export const NewsCardFive = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Social Profile
      </h1>
      <div className="flex gap-x-[2px]">
        <a
          className="bg-[#062a4d] text-white inline-block h-[50px] leading-[50px] text-center w-[50px] transition-all duration-300 ease-out hover:bg-[#E12454] "
          href="https://www.instagram.com/scatchz/"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="bg-[#062a4d] text-white inline-block h-[50px] leading-[50px] text-center w-[50px] transition-all duration-300 ease-out hover:bg-[#E12454] "
          href="https://www.instagram.com/scatchz/"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="bg-[#062a4d] text-white inline-block h-[50px] leading-[50px] text-center w-[50px] transition-all duration-300 ease-out hover:bg-[#E12454] "
          href="https://www.instagram.com/scatchz/"
        >
          <i className="fab fa-behance"></i>
        </a>
        <a
          className="bg-[#062a4d] text-white inline-block h-[50px] leading-[50px] text-center w-[50px] transition-all duration-300 ease-out hover:bg-[#E12454] "
          href="https://www.instagram.com/scatchz/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="bg-[#062a4d] text-white inline-block h-[50px] leading-[50px] text-center w-[50px] transition-all duration-300 ease-out hover:bg-[#E12454] "
          href="https://www.instagram.com/scatchz/"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export const NewsCardSix = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Instagram Feeds
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-2">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={src}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const NewsCardSeven = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Instagram Feeds
      </h1>
      <div className="flex flex-wrap gap-y-2 gap-x-[5px]">
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          Popular
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          desgin
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          usability
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          develop
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          consult
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          icon
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          HTML
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          ux
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          business
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          kit
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          keyboard
        </a>
        <a
          href="./Blog"
          className="bg-[#f5f5f5] text-[#5f5b5b] inline-block text-xs font-medium leading-none px-4 py-3 uppercase transition-all duration-300 ease-out not-italic font-[Rubik] hover:bg-[#E12454] hover:text-white"
        >
          tech
        </a>
      </div>
    </div>
  );
};
