import React from "react";
import { useState } from "react";
import { Cards_Team } from "../components/ui/Cards";
import { Cards_News } from "../components/ui/Cards";
import Typography from "../components/ui/Typography";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const items = [" "];

export const News = () => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  const cardsInfoTeam = [
    {
      id: 0,
      title: "Rosalina D. Williamson",
      description: "Card Description",
      content: "Founder",
      footer: "Card Footer",
      src: "./img/member1.png",
    },
  ];
  const stylesTeam = {
    cards_styles: {
      backgroundColor: "white",
      // justifyContent: 'space-around',
      columnGap: "1.25rem",
      rowGap: "0.75rem",
      //  padding: '10px 15%',
    },
    card_styles: {
      backgroundColor: "white",
      color: "black",
      padding: "0",
      gap: "1.75rem",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      //  shadowColor: '#AAC',
    },
    img_styles: {
      width: "70%",
    },
    title_styles: {
      fontSize: "1.28rem",
      color: "#171717",
      // colorHoverTitle: '#e1236b',
    },
    content_styles: {
      textTransform: "uppercase",
      fontWeight: "500",
      color: "#e1236b",
      colorHoverFooter: "#73bb1d",
    },
    absolute_styles: {
      position: "absolute",
      right: "15%",
      bottom: "10%",
      fontWeight: "900",
      fontSize: "20px",
      color: "white",
      backgroundColor: "#349030",
      backgroundcolorHoverabsolute: "#e1236b",
      width: "40px",
      height: "40px",
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      boxShadow: "0 5px 10px #a9cba8",
    },
  };

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
      // src: "./img/b4.jpg",
    },
    {
      id: 4,
      title:
        "This health blog from NPR takes a fairly broad look at the medical world,.",
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
        <div className=" flex flex-col md:flex-row items-center text-center  w-full p-40">
          <div className="flex flex-col items-center sm:items-start w-full">
            <Typography variant="h4" className="mb-10  ">
              We are here for your care.
            </Typography>
            <Typography variant="h2">News</Typography>
          </div>

          <div className="flex flex-row justify-end sm:justify-start mt-1">
            <Typography variant="p" className="cursor-pointer">
              <Link to="/About">Home</Link>
            </Typography>

            <span className="mx-1">|</span>
            <Typography variant="p" className="text-red-500">
              News
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-2/3">
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
        <div className="w-1/3 p-24 pl-0">
          <div className="w-full">
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
          <Cards_Team
            cards={cardsInfoTeam}
            cards_styles={stylesTeam.cards_styles}
            card_styles={stylesTeam.card_styles}
            img_styles={stylesTeam.img_styles}
            shadowColor={stylesTeam.card_styles.shadowColor}
            title_styles={stylesTeam.title_styles}
            colorHoverTitle={stylesTeam.title_styles.colorHoverTitle}
            content_styles={stylesTeam.content_styles}
            colorHoverContent={stylesTeam.content_styles.colorHoverContent}
            absolute_styles={stylesTeam.absolute_styles}
            backgroundcolorHoverabsolute={
              stylesTeam.absolute_styles.backgroundcolorHoverabsolute
            }
          ></Cards_Team>
        </div>
      </div>
    </>
  );
};
