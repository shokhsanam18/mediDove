import Typography from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const NewsAppointment = () => {
  return (
    <div className="md:px-40 md:py-20 ">
      <div className="flex items-center justify-between md:flex-row flex-col">
        <div
          className="h-[40vh] md:w-1/2  bg-contain bg-no-repeat sm:w-full m-8"
          style={{ backgroundImage: "url('/img/bgnurse.png')" }}
        >
          <Typography variant="p" className="py-10">
            News
          </Typography>
          <Typography
            variant="h2"
            className="py-2 text-4xl sm:text-4xl md:text-6xl"
          >
            Get Every Single Update Here.
          </Typography>

          <div className="w-32 my-5 h-1 bg-[linear-gradient(to_right,red_50%,transparent_50%)] bg-[length:15px_100%]"></div>
        </div>
        <div>
          <Button className="flex h-16 w-60 justify-evenly gap-7 text-center rounded-full bg-red-600 text-white font-semibold shadow-lg hover:bg-green-600 transition relative">
            <span className="w-14 h-16 flex items-center justify-center bg-white text-black rounded-full border-2 shadow-md ">
              <Plus size={16} />
            </span>{" "}
            <Link to="/Blog"> OUR BLOG</Link>
          </Button>
        </div>
      </div>
      <div> CARDS HERE =)
      </div>
      <div className="justify-items-end py-10 ">
        <Button className="flex h-16 w-60 gap-7 text-center rounded-full bg-green-600   text-white font-semibold shadow-lg hover:bg-red-600 transition relative">
          <span className="w-14 h-16 flex items-center justify-center bg-white text-black rounded-full border-2 shadow-md ">
            <Plus size={15} />
          </span>
          <Link to="/Blog"> Contact us</Link>
        </Button>
      </div>
    </div>
  );
};

export default NewsAppointment;
