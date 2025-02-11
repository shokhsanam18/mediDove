import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardImage,
} from "@/components/ui/card";
import Typography from "@/components/ui/Typography";
import { Link } from "react-router-dom";
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
      {articles.map((articles) => (
        <Card key={articles.id} className="shadow-md p-5">
          <CardImage
            className="w-full h-[250px] object-cover"
            src={articles.image}
          />

          <CardHeader>
            <h6 className="text-red-600 mb-1 font-bold">
              <Link to="/Blog">{articles.categories.join(",  ")}</Link>
            </h6>
            <CardTitle>
              <h4 className="text-2xl mb-4  hover:text-red-500 transition-colors duration-300">
                <Link to="/Blog">{articles.title}</Link>
              </h4>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Typography variant="p"> {articles.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default MedicalCardsAppointment;
