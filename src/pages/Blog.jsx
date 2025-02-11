import React from "react";
import { Cards_News } from "../components/ui/Cards";
import Typography from "../components/ui/Typography";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Blog = () => {
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

    {
      id: 3,
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
      src: "./img/b4.jpg",
    },
    {
      id: 4,
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
      src: "./img/b5.jpg",
    },
    {
      id: 5,
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
      src: "./img/b6.jpg",
    },
  ];
  const stylesNews = {
    cards_styles: {
      backgroundColor: "white",
      justifyContent: "space-around",
      columnGap: "1.25rem",
      rowGap: "3rem",
      padding: "100px 10%",
      wordSpacing: "0.75rem",
    },
    card_styles: {
      backgroundColor: "#FAF9FF",
      color: "black",
      padding: "0",
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
    },

    content_styles: {
      fontWeight: "500",
      color: "#808e96",
      colorHoverContent: "#e1236b",
      display: "flex",
      gap: "20px",
    },

    footer_styles: {
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
       <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between w-full">
          <div className="flex flex-col">
            <Typography
              variant="p"
              className="text-[#6A7B8F] text-sm sm:text-base mb-2"
            >
              We are here for your care.
            </Typography>
            <Typography variant="h1" className="text-black font-bold">
            Blog 3 coloum
            </Typography>
          </div>

          <div className="flex items-center">
            <Typography variant="p" className="text-gray-600">
              Home <span className="mx-2">|</span>
            </Typography>
            <Typography variant="p" className="text-red-600 font-semibold">
              About
            </Typography>
          </div>
        </div>
      </div>

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
    </>
  );
};
