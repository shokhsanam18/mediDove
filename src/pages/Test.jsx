import React from "react";
import { Button } from "@/components/ui/button";
import { Cards_Services, Cards_News, Cards_Team } from "../components/ui/Cards";

export const Test = () => {
  const cardsInfoServices = [
    {
      id: 0,
      title: "Dental Care",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      content: "Read More",
      footer: "Card Footer",
      src: "./img/service2.png",
    },
    {
      id: 1,
      title: "Dental Care",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      content: "Read More",
      footer: "Card Footer",
      src: "./img/service2.png",
    },
    {
      id: 2,
      title: "Dental Care",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      content: "Read More",
      footer: "Card Footer",
      src: "./img/service2.png",
    },

    {
      id: 3,
      title: "Card Title",
      description: "Card Description",
      content: "Card Content",
      footer: "Card Footer",
      src: "./img/service2.png",
    },
  ];
  const stylesServices = {
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
      padding: "1rem 3rem",
      gap: "1rem",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#AAC",
    },
    img_styles: {
      width: "55%",
    },
    title_styles: {
      fontSize: "1.28rem",
      color: "#171717",
      colorHoverTitle: "#73bb1d",
    },
    content_styles: {
      fontWeight: "700",
      color: "#808e96",
      colorHoverContent: "#73bb1d",
    },
  };

  const cardsInfoNews = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      content: ["Medical,", "Medicine"],
      footer: "read more ->",
      src: "./img/blog-thumb-1.jpg",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      content: ["Medical,", "Medicine"],
      footer: "read more ->",
      src: "./img/blog-thumb-1.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      content: ["Medical,", "Medicine"],
      footer: "read more ->",
      src: "./img/blog-thumb-1.jpg",
    },

    {
      id: 3,
      title: "Card Title",
      description: "Card Description",
      content: ["content1", "content2"],
      footer: "Card Footer",
      src: "./img/blog-thumb-1.jpg",
    },
  ];
  const stylesNews = {
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
      gap: "1rem",
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
      color: "#171717",
      colorHoverTitle: "#e1236b",
    },
    content_styles: {
      fontWeight: "500",
      color: "#808e96",
      colorHoverContent: "#e1236b",
      display: "flex",
      gap: "10px",
    },
    footer_styles: {
      textTransform: "uppercase",
      fontWeight: "500",
      color: "#e1236b",
      colorHoverFooter: "#73bb1d",
    },
  };

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
      title: "Rosalina D. Williamson",
      description: "Card Description",
      content: "Founder",
      footer: "Card Footer",
      src: "./img/member1.png",
    },
    {
      id: 2,
      title: "Rosalina D. Williamson",
      description: "Card Description",
      content: "Founder",
      footer: "Card Footer",
      src: "./img/member1.png",
    },

    {
      id: 3,
      title: "Card Title",
      description: "Card Description",
      content: "Card Content",
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
      boxShadow: "",
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

  return (
    <>
      <div>Test</div>
      <Button>Dynamic button</Button>
      <Cards_Services
        cards={cardsInfoServices}
        cards_styles={stylesServices.cards_styles}
        card_styles={stylesServices.card_styles}
        img_styles={stylesServices.img_styles}
        shadowColor={stylesServices.card_styles.shadowColor}
        title_styles={stylesServices.title_styles}
        colorHoverTitle={stylesServices.title_styles.colorHoverTitle}
        content_styles={stylesServices.content_styles}
        colorHoverContent={stylesServices.content_styles.colorHoverContent}
      ></Cards_Services>

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
    </>
  );
};
