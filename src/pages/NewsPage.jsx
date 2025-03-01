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
import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

export const News = () => {
  const { t } = useTranslation();
  const cardsInfoNews = [
    {
      id: 0,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .",
      description: t("news.card.description"),
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

      footer: t("news.card.footer"),
      src: "./img/b1.jpg",
    },
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .",
      description: t("news.card.description"),
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
      footer: t("news.card.footer"),
      src: "./img/b2.jpg",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .",
      description: t("news.card.description"),
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
      footer: t("news.card.footer"),
      src: "./img/b3.jpg",
    },

    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .",
      description: t("news.card.description"),
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
      footer: t("news.card.footer"),
      // src: "./img/b4.jpg",
    },
    {
      id: 4,
      title: t("news.NPR.title"),
      description: "- Rosalina Pong",
      content: [],
    },
  ];
  const stylesNews = {
    cards_styles: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      justifyContent: "space-around",
      columnGap: "1.25rem",
      rowGap: "3rem",

      wordSpacing: "0.75rem",
    },
    card_styles: {
      backgroundColor: "#FAF9FF",
      color: "black",
      padding: "0 0 50px 0",
      gap: "1.5rem",

      //  textAlign: 'center',
      //  alignItems: 'center',
      //  justifyContent: 'center',
      //  shadowColor: '#AAC',
    },
    img_styles: {
      width: "100%",
    },
    title_styles: {
      fontSize: "1.28rem",
      color: "#223645",
      colorHoverTitle: "#e1236b",
      padding: "0 50px 0 50px",
    },

    content_styles: {
      padding: "0 50px 0 50px",

      fontWeight: "500",
      color: "#808e96",
      colorHoverContent: "#e1236b",
      display: "flex",
      gap: "20px",
    },

    footer_styles: {
      padding: "0 50px 0 50px",

      textTransform: "uppercase",
      fontWeight: "500",
      color: "#e1236b",
      colorHoverFooter: "#73bb1d",
    },
  };
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
        <div className=" flex flex-col md:flex-row items-center text-center  w-full p-40">
          <div className="flex flex-col items-center sm:items-start w-full">
            <Typography variant="h4" className="mb-10  ">
              {t("news.main.title")}
            </Typography>
            <Typography variant="h2">{t("news.main.showcase")}</Typography>
          </div>
          <div className="flex flex-row justify-end sm:justify-start mt-1">
            <Typography variant="p" className="cursor-pointer">
              <Link to="/About">{t("news.main.button1")}</Link>
            </Typography>

            <span className="mx-1">|</span>
            <Typography variant="p" className="text-red-500">
              <Link to="/News">{t("news.main.button2")}</Link>
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-x-6 px-[9.35%] py-[100px]">
        <div className="sm:w-2/3 w-full p-0">
          <Cards_News
            cards={cardsInfoNews}
            cards_styles={stylesNews.cards_styles}
            card_styles={stylesNews.card_styles}
            img_styles={stylesNews.img_styles}
            shadowColor={stylesNews.card_styles.shadowColor}
            title_styles={stylesNews.title_styles}
            colorHoverTitle={stylesNews.title_styles.colorHoverTitle}
            content_styles={stylesNews.content_styles}
            colorHoverContent={stylesNews.content_styles.colorHoverContent}
            footer_styles={stylesNews.footer_styles}
            colorHoverFooter={stylesNews.footer_styles.colorHoverFooter}
          ></Cards_News>

          <div className="flex justify-center items-center space-x-3 my-12">
            <button className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 text-lg">
              «
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-12 h-12 flex justify-center items-center rounded-full text-lg font-semibold 
      ${
        page === 2
          ? "bg-red-500 text-white"
          : "border border-gray-300 text-gray-500 hover:bg-gray-100"
      }`}
              >
                {page < 10 ? `0${page}` : page}
              </button>
            ))}

            <span className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 text-lg">
              ...
            </span>

            <button className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 text-lg">
              »
            </button>
          </div>
        </div>
        <div className="sm:w-1/3 w-full p-24 pl-0 flex flex-col items-center gap-y-10">
          <NewsCardOne />
          <NewsCardTwo />
          <NewsCardThree />
          <NewsCardFour />
          <NewsCardFive />
          <NewsCardSix />
          <NewsCardSeven />
          <Link
            className="w-full"
            to="/ContactUs"
            state={{ scrollTo: "FormComponent" }}
          >
            <img
              src="/img/image copy 10.png"
              alt="Contact Us Card"
              className="w-full"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
