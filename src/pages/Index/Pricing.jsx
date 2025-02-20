import Typography from "@/components/ui/Typography";
import { Plus} from "lucide-react";
import { Link } from "react-router-dom";
import { Cards_Team } from "@/components/ui/Cards";


const Pricing = () => {
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
          marginBottom: '0.75rem'
          // colorHoverTitle: '#e1236b',
        },
        content_styles: {
          textTransform: "uppercase",
          fontWeight: "500",
          color: "#e1236b",
          colorHoverFooter: "#73bb1d",
          fontWeight: 'bold',
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
    <section className="flex w-full flex-col sm:px-[5%] px-[2%] pt-11 pb-16 gap-14 bg-[#FFF]">
      
        <div>
        <div className="flex items-center justify-between md:flex-row flex-col">
            <div
            className="md:w-1/2 bg-contain bg-left-top bg-no-repeat sm:w-full"
            style={{ backgroundImage: "url('/img/bgnurse.png')" }}
            >
            <Typography variant="p" className={`font-bold`}>
            Our Team
            </Typography>
            <Typography
                variant="h2"
                className="mt-4 text-4xl sm:text-4xl md:text-5xl"
            >
                A Professional & Care Provider
            </Typography>
            <div className="w-32 my-5 h-1 bg-[linear-gradient(to_right,red_50%,transparent_50%)] bg-[length:15px_100%]"></div>
            </div>
            <Link to='/Blog' className="hidden md:block">
            <button className="flex items-center h-16 w-64 rounded-full bg-[#E51E50] text-white font-semibold shadow-lg hover:bg-[#8CB369] transition">
                <span className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full border-2 border-white shadow-md ml-2">
                <Plus size={20}/>
                </span>
                <span className="ml-5 text-sm font-semibold tracking-wide">MAKE APPOINTMENT</span>
            </button>
            </Link>
        </div>
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
  );
};

export default Pricing;
