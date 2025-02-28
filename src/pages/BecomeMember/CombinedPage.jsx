import Typography from "@/components/ui/Typography";
import { Plus, Calendar, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Contact } from "../ContantUs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const NewsAppointment = () => {
  const { t } = useTranslation();
  return (
    <div className="md:px-40 md:py-20">
      <div className="flex items-center justify-between md:flex-row flex-col">
        <div
          className="h-[40vh] md:w-1/2 bg-contain bg-no-repeat sm:w-full m-8"
          style={{ backgroundImage: "url('/img/bgnurse.png')" }}
        >
          <Typography variant="p" className="py-10">
            {t("index.news.title")} {/* News */}
          </Typography>
          <Typography
            variant="h2"
            className="py-2 text-4xl sm:text-4xl md:text-6xl"
          >
            {t("index.news.subtitle")} {/* Get Every Single Update Here. */}
          </Typography>
          <div className="w-32 my-5 h-1 bg-[linear-gradient(to_right,red_50%,transparent_50%)] bg-[length:15px_100%]"></div>
        </div>
        <div className="hidden md:block">
          <button
            className="flex items-center h-16 w-60 rounded-full bg-[#E51E50] text-white font-semibold shadow-lg hover:bg-[#8CB369] transition"
            onClick={() => navigate("/Blog")}
          >
            <span className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full border-2 border-white shadow-md ml-2">
              <Plus size={16} />
            </span>
            <span className="ml-4 text-sm tracking-wide uppercase">
              {t("app.blog")} {/* OUR BLOG */}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const MedicalCardsAppointment = () => {
  const articles = [
    {
      id: 1,
      image: "/img/blog-thumb-1.jpg",
      categories: ["MEDICAL", "MEDICINE"],
      title: "Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      image: "/img/medcard.png",
      categories: ["MEDICAL", "MEDICINE"],
      title: "Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:w-2/3">
      {articles.map((article) => (
        <Card key={article.id} className="shadow-md p-5">
          <img
            className="w-full h-[250px] object-cover"
            src={article.image}
            alt="blog"
          />
          <CardHeader>
            <h6 className="text-red-600 mb-1 font-bold">
              <Link to="/Blog">{article.categories.join(", ")}</Link>
            </h6>
            <CardTitle>
              <h4 className="text-2xl mb-4 hover:text-red-500 transition-colors duration-300">
                <Link to="/Blog">{article.title}</Link>
              </h4>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Typography variant="p">{article.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const BlogCards = () => {
  const { t } = useTranslation();
  return (
    <div className="border rounded-lg p-9 md:w-1/3 w-full max-w-md mx-auto">
      {[...Array(3)].map((_, index) => (
        <Card key={index} className="mb-8">
          <CardHeader className="mb-2">
            <CardTitle>
              <h4 className="text-xl text-black hover:text-red-500 transition-colors duration-300">
                Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
              </h4>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center text-sm text-gray-500 gap-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>
                {t("index.news.calendar")} {/* 23rd Jan 2022  */}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={14} />
              <span>
                {t("index.news.comments")} {/* 33 Comments */}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const CombinedPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <NewsAppointment />
      <div className="flex flex-col md:flex-row gap-10 p-5 md:px-28">
        <MedicalCardsAppointment />
        <BlogCards />
      </div>
      <div className="md:flex md:justify-end p-28 hidden ">
        <Link to="/ContactUs">
          <button className="flex items-center h-16 w-60 rounded-full bg-[#8CB369] text-white font-semibold shadow-lg hover:bg-[#C71744] transition">
            <span className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full border-2 border-white shadow-md ml-2">
              <Phone size={16} />
            </span>
            <span className="ml-4 text-sm tracking-wide uppercase">
              {t("app.call")} {/* MAKE CALL */}
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default CombinedPage;
