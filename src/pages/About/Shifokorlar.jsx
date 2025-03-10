import React from "react";
import {
  Cards,
  Card,
  CardImage,
  CardImg,
  CardTitle,
  CardDescription,
} from "@/components/ui/Сard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Typography from "@/components/ui/Typography";
import bgImage from "@/assets/photo_2025-02-08_12-54-53.jpg";
import { useTranslation } from "react-i18next";
import { Cards_Team } from "@/components/ui/Cards";

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
  const { t } = useTranslation();

  const cardsInfoTeam = [
    {
      id: 0,
      title: "Rosalina D. Williamson",
      description: "Card Description",
      content: "Founder",
      footer: "Card Footer",
      src: "./img/member1.png",
    },
    {
      id: 1,
      title: "Diconda PIran Will",
      description: "Card Description",
      content: "dentist",
      footer: "Card Footer",
      src: "./img/member2.png",
    },
    {
      id: 2,
      title: "Hulk M. Kenbon",
      description: "Card Description",
      content: "neurologist",
      footer: "Card Footer",
      src: "./img/member3.png",
    },
    {
      id: 3,
      title: "Haliam Z. Dicolaz",
      description: "Card Description",
      content: "Consultant",
      footer: "Card Footer",
      src: "./img/member4.png",
    },
    {
      id: 4,
      title: "Nicolas D. Case",
      description: "Card Description",
      content: "dentist",
      footer: "Card Footer",
      src: "./img/member5.png",
    },
    {
      id: 5,
      title: "Phumdon H. Norman",
      description: "Card Description",
      content: "Neurologist",
      footer: "Card Footer",
      src: "./img/member6.png",
    },
  ];
  const stylesTeam = {
    cards_styles: {
      backgroundColor: "white",
      // justifyContent: 'space-around',
      columnGap: "1.25rem",
      rowGap: "2rem",
      //  padding: '10px 15%',
    },
    card_styles: {
      backgroundColor: "white",
      color: "#223645",
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
      fontSize: "1.75rem",
      color: "#223645",
      marginBottom: "0.75rem",
      // colorHoverTitle: '#e1236b',
    },
    content_styles: {
      textTransform: "uppercase",
      // fontWeight: "500",
      color: "#e1236b",
      colorHoverFooter: "#73bb1d",
      fontWeight: "bold",
    },
    absolute_styles: {
      position: "absolute",
      right: "10%",
      bottom: "10%",
      fontWeight: "900",
      fontSize: "30px",
      color: "white",
      backgroundColor: "#8FB569",
      backgroundcolorHoverabsolute: "#e1236b",
      width: "65px",
      height: "65px",
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      boxShadow: "0 5px 10px #a9cba8",
    },
  };
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
              {t("about.shifokorlar.title")} {/* We are here for your care. */}
            </Typography>
            <Typography variant="h1" className="text-black font-bold">
              {t("about.shifokorlar.showcase")} {/* Shifokorlar */}
            </Typography>
          </div>
          <div className="flex items-center">
            <Link to="/" className="no-underline">
              <Typography variant="p" className="text-gray-600">
                {t("about.main.button1")} {/* Home */}
              </Typography>
            </Link>
            <span className="mx-2">|</span>
            <Link to="/About" className="no-underline">
              <Typography variant="p" className="text-red-600 font-semibold">
                {t("about.main.button2")} {/* About */}
              </Typography>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs md:text-sm text-gray-400">
              {t("about.shifokorlar.team")} 
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-700">
              {t("about.shifokorlar.proffesional")} 
              <br className="hidden md:block" />
              {t("about.shifokorlar.care")} 
            </h2>
            <div className="w-12 md:w-16 h-1 border-b-4 border-red-500 mt-2 mx-auto md:mx-0"></div>
          </div>

          <Button className="mt-4 md:mt-0 bg-red-500 text-white px-5 py-3 md:px-7 md:py-4 rounded-full flex items-center gap-2 shadow-lg hover:bg-red-600 uppercase">
            <span className="text-lg md:text-xl font-bold">+</span>
            {t("about.shifokorlar.appointment")}{" "}
            
          </Button>
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
      </section>
    </div>
  );
};
