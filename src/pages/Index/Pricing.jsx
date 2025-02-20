import Typography from "@/components/ui/Typography";
import { Plus} from "lucide-react";
import { Link } from "react-router-dom";
import { Cards_Plans, Cards_Team } from "@/components/ui/Cards";
import { Cards_Services } from "@/components/ui/Cards";


const Pricing = () => {

    const cardsInfoServices = [
        {
          id: 0,
          title: 'Professional',
          description: 'Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          content: 'Price: $425.00',
          footer: 'Card Footer',
          src: './img/pricing-thumb-1.png'
        },
        {
          id: 1,
          title: 'Advanced',
          description: 'Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          content: 'Price: $425.00',
          footer: 'Card Footer',
          src: './img/pricing-thumb-2.png'
        },
        {
          id: 2,
          title: 'Advantage',
          description: 'Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          content: 'Price: $425.00',
          footer: 'Card Footer',
          src: './img/pricing-thumb-3.png'
        },
    ]
    const stylesServices = {
        cards_styles: {
         backgroundColor: '#F4F9FC',
         // justifyContent: 'space-around',
         columnGap: '1.25rem',
         rowGap: '1rem',
        //  padding: '10px 15%',
       },
       card_styles: {
         backgroundColor: 'white',
         color: '#223645',
         padding: '2rem 3rem',
         gap: '1rem',
         textAlign: 'left',
         alignItems: 'start',
         justifyContent: 'center',
       },
       img_styles: {
        // width: '100%',
        textAlign: 'left',
        margin: '0'
       },
       title_styles: {
        fontSize: '3rem',
        color: '#223645',
       },
       content_styles: {
        fontWeight: '700',
        fontSize: '3rem',
        color: '#808e96',
        colorHoverContent: '#73bb1d',
       },
       description_styles: {
        fontSize: '1rem'
       }
        
    }
  return (
    <section className="flex w-full flex-col sm:px-[5%] px-[2%] pt-11 pb-16 gap-14 bg-[#F4F9FC]">
      
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
        <Cards_Plans cards={cardsInfoServices} 
                                    cards_styles = {stylesServices.cards_styles}
                                    card_styles = {stylesServices.card_styles}
                                    img_styles = {stylesServices.img_styles}
                                    shadowColor = {stylesServices.card_styles.shadowColor}
                                    title_styles = {stylesServices.title_styles}
                                    colorHoverTitle = {stylesServices.title_styles.colorHoverTitle}
                                    content_styles = {stylesServices.content_styles}
                                    colorHoverContent = {stylesServices.content_styles.colorHoverContent}
                                    description_styles = {stylesServices.content_styles.description_styles}
        ></Cards_Plans>

    </section>
  );
};

export default Pricing;
