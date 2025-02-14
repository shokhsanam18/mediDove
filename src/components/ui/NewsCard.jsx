import * as React from "react";
import { useState } from "react";

import img1 from "/img/image.png";
import img2 from "/img/image.png";
import img3 from "/img/image.png";
import img4 from "/img/image.png";
import img5 from "/img/image.png";
import img6 from "/img/image.png";
import img7 from "/img/image.png";
import img8 from "/img/image.png";
import img9 from "/img/image.png";

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
      ></h1>
      <div>
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
      </div>
    </div>
  );
};

export const NewsCardTwo = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      ></h1>
      <div></div>
    </div>
  );
};

export const NewsCardThree = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      ></h1>
      <div></div>
    </div>
  );
};

export const NewsCardFour = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      ></h1>
      <div></div>
    </div>
  );
};

export const NewsCardFive = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      ></h1>
      <div></div>
    </div>
  );
};

export const NewsCardSix = () => {
  return (
    <div className="p-[30px] border-t-4 border-[#8fb569] shadow-lg shadow-[rgba(200,183,255,0.2)] w-full">
      <h1
        className="text-[21px] font-semibold text-[#223645] tracking-[-0.3px] mb-[2rem]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      ></h1>
      <div>
        <div className="grid grid-cols-3 gap-4 p-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
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
      ></h1>
      <div></div>
    </div>
  );
};
