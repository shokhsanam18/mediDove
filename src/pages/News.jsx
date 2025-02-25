import React from "react";
import { useState } from "react";
import { Cards_Team } from "../components/ui/Cards";
import { Cards_News } from "../components/ui/Cards";
import Typography from "../components/ui/Typography";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NewsCardSix } from "@/components/ui/NewsCard";
import { NewsCardOne } from "@/components/ui/NewsCard";
import { NewsCardTwo } from "@/components/ui/NewsCard";
import { NewsCardThree } from "@/components/ui/NewsCard";
import { NewsCardFour } from "@/components/ui/NewsCard";
import { NewsCardFive } from "@/components/ui/NewsCard";
import { NewsCardSeven } from "@/components/ui/NewsCard";

export const News = () => {
  const cardsInfoNews = [
    {
      id: 0,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .",
      description:
        "There’s a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.",
      content: [
        <span
          key="user"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <FontAwesomeIcon icon={faUser} style={{ color: "#e1236b" }} />
          <span style={{ color: "#808e96" }}>Diboli</span>
        </span>,
        <span
          key="comments"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <FontAwesomeIcon icon={faComment} style={{ color: "#e1236b" }} />
          <span style={{ color: "#808e96" }}>23 comments</span>
        </span>,
      ],
      footer: "read more ->",
      src: "./img/b1.jpg",
    },
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .",
      description:
        "There’s a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.",
      content: [
        <span
          key="user"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <FontAwesomeIcon icon={faUser} style={{ color: "#e1236b" }} />
          <span style={{ color: "#808e96" }}>Diboli</span>
        </span>,
        <span
          key="comments"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <FontAwesomeIcon icon={faComment} style={{ color: "#e1236b" }} />
          <span style={{ color: "#808e96" }}>23 comments</span>
        </span>,
      ],
      footer: "read more ->",
      src: "./img/b2.jpg",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .",
      description:
        "There’s a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.",
      content: [
        <span
          key="user"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <FontAwesomeIcon icon={faUser} style={{ color: "#e1236b" }} />
          <span style={{ color: "#808e96" }}>Diboli</span>
        </span>,
        <span
          key="comments"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <FontAwesomeIcon icon={faComment} style={{ color: "#e1236b" }} />
          <span style={{ color: "#808e96" }}>23 comments</span>
        </span>,
      ],
      footer: "read more ->",
      src: "./img/b3.jpg",
    },
  ];

  return (
    <>
      <div
        className="flex items-center h-screen w-full"
        style={{
          height: "calc(100vh - 150px)",
          backgroundImage: "url('/img/backimg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col md:flex-row items-center text-center w-full p-40">
          <div className="flex flex-col items-center sm:items-start w-full">
            <Typography variant="h4" className="mb-10">
              We are here for your care.
            </Typography>
            <Typography variant="h2">News</Typography>
          </div>
          <div className="flex flex-row justify-end sm:justify-start mt-1">
            <Typography variant="p" className="cursor-pointer">
              <Link to="/">Home</Link>
            </Typography>
            <span className="mx-1">|</span>
            <Typography variant="p" className="text-red-500">
              <Link to="/News">News</Link>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
