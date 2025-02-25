import Typography from "@/components/ui/Typography";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Cards_Plans, Cards_Team } from "@/components/ui/Cards";
import { Cards_Services } from "@/components/ui/Cards";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const [isYear, setIsYear] = useState(false);

  const cardsInfoServices = [
    {
      id: 0,
      title: "Professional",
      description:
        "Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      content: "Price: $425.00",
      footer: "Card Footer",
      src: "./img/pricing-thumb-1.png",
    },
    {
      id: 1,
      title: "Advanced",
      description:
        "Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      content: "Price: $455.00",
      footer: "Card Footer",
      src: "./img/pricing-thumb-2.png",
    },
    {
      id: 2,
      title: "Advantage",
      description:
        "Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      content: "Price: $489.00",
      footer: "Card Footer",
      src: "./img/pricing-thumb-3.png",
    },
  ];
  const stylesServices = {
    cards_styles: {
      backgroundColor: "#F4F9FC",
      // justifyContent: 'space-around',
      columnGap: "1.25rem",
      rowGap: "1rem",
      //  padding: '10px 15%',
    },
    card_styles: {
      backgroundColor: "white",
      color: "#223645",
      padding: "3rem 3rem",
      gap: "2rem",
      textAlign: "left",
      alignItems: "start",
      justifyContent: "center",
    },
    img_styles: {
      // width: '100%',
      textAlign: "left",
      margin: "0",
    },
    title_styles: {
      fontSize: "2.75rem",
      color: "#223645",
      fontWeight: "700",
    },
    content_styles: {
      fontWeight: "700",
      fontSize: "3rem",
      color: "#808e96",
      colorHoverContent: "#73bb1d",
    },
    description_styles: {
      fontSize: "1rem",
    },
  };
  const { t } = useTranslation();
  return (
    <section className="flex w-full flex-col sm:px-[5%] px-[2%] pt-11 pb-16 gap-14 bg-[#F4F9FC]">
      <div className="flex items-center justify-between md:flex-row flex-col">
        <div
          className="md:w-1/2 bg-contain bg-left-top bg-no-repeat w-full sm:w-full"
          style={{ backgroundImage: "url('/img/bgnurse.png')" }}
        >
          <Typography variant="p" className={`font-bold`}>
            {/* Our Plans */}
            {t("index.pricing.title")}
          </Typography>
          <Typography
            variant="h2"
            className="mt-4 text-4xl sm:text-5xl md:text-6xl"
          >
            {/* Pricing & Plans */}
            {t("index.pricing.subtitle")}
          </Typography>
          <div className="w-32 my-5 h-1 bg-[linear-gradient(to_right,red_50%,transparent_50%)] bg-[length:15px_100%]"></div>
        </div>
        <div className="border-violet-200 border-2 border-opacity-60 rounded-full bg-white">
          <button
            className={`text-sm uppercase tracking-wide h-20 w-44 font-bold text-center rounded-full ${
              isYear ? "text-[#223645] bg-white" : "bg-[#E51E50] text-white"
            }  transition-all`}
            onClick={() => setIsYear(false)}
          >
            {/* monthly */}
            {t("index.pricing.month")}
          </button>
          <button
            className={`text-sm uppercase tracking-wide h-20 w-44 font-bold text-center rounded-full ${
              isYear ? "bg-[#E51E50] text-white" : "text-[#223645] bg-white"
            }  transition-all`}
            onClick={() => setIsYear(true)}
          >
            {/* yearly */}
            {t("index.pricing.year")}
          </button>
        </div>
      </div>
      <Cards_Plans
        cards={cardsInfoServices}
        cards_styles={stylesServices.cards_styles}
        card_styles={stylesServices.card_styles}
        img_styles={stylesServices.img_styles}
        shadowColor={stylesServices.card_styles.shadowColor}
        title_styles={stylesServices.title_styles}
        colorHoverTitle={stylesServices.title_styles.colorHoverTitle}
        content_styles={stylesServices.content_styles}
        colorHoverContent={stylesServices.content_styles.colorHoverContent}
        description_styles={stylesServices.content_styles.description_styles}
      ></Cards_Plans>
    </section>
  );
};

export default Pricing;
