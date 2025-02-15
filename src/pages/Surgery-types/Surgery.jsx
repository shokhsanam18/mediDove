import React from "react";
import FormDepartment from "./FormDepartment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import Typography from "@/components/ui/Typography";
import { Cards_Services } from "@/components/ui/Cards";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, MessageCircle, Phone } from "lucide-react";



export const Surgery = () => {
  const cardsInfoServices = [
    {
      id: 0,
      title: 'Dental Care',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      content: 'Read More',
      footer: 'Card Footer',
      src: './img/service1.png'
    },
    {
      id: 1,
      title: 'Dental Care',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      content: 'Read More',
      footer: 'Card Footer',
      src: './img/service2.png'
    },
    {
      id: 2,
      title: 'Dental Care',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      content: 'Read More',
      footer: 'Card Footer',
      src: './img/service3.png'
    },
    
    {
      id: 3,
      title: 'Card Title',
      description: 'Card Description',
      content: 'Card Content',
      footer: 'Card Footer',
      src: './img/service4.png'
    },
    {
      id: 4,
      title: 'Dental Care',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      content: 'Read More',
      footer: 'Card Footer',
      src: './img/service5.png'
    },
    {
      id: 5,
      title: 'Dental Care',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      content: 'Read More',
      footer: 'Card Footer',
      src: './img/service6.png'
    },
  ]
  const stylesServices = {
    cards_styles: {
     backgroundColor: 'white',
     // justifyContent: 'space-around',
     columnGap: '1.25rem',
     rowGap: '0.75rem',
    //  padding: '10px 15%',
   },
   card_styles: {
     backgroundColor: 'white',
     color: 'black',
     padding: '1rem 3rem',
     gap: '1rem',
     textAlign: 'center',
     alignItems: 'center',
     justifyContent: 'center',
     shadowColor: '#AAC',
   },
   img_styles: {
    width: '55%',
   },
   title_styles: {
    fontSize: '1.28rem',
    color: '#171717',
    colorHoverTitle: '#73bb1d',
   },
   content_styles: {
    fontWeight: '700',
    color: '#808e96',
    colorHoverContent: '#73bb1d',
   },
  }
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
                        <Typography variant="h1">
                            Our Services
                        </Typography>
                    </div>

                    <div className="flex items-center">
                        <Typography variant="p" className="text-gray-600">
                            Home <span className="mx-2">|</span>
                        </Typography>
                        <Typography variant="p" className="text-red-600 font-semibold">
                            Services
                        </Typography>
                    </div>
                </div>
            </div>



            <div className="flex flex-col sm:flex-row gap-7 w-11/12 mx-auto justify-center mb-24">
  <div className="relative flex flex-col w-full sm:w-1/2 lg:w-2/5 text-end justify-center p-4">
    <div className="flex justify-end mb-4 sm:mb-6 lg:mb-8">
      <img className="w-24 sm:w-36 lg:w-48" src='./img/section-back-icon.png' alt="back" />
    </div>
    <div className="relative">
      <p className="text-lg sm:text-xl mt-4 sm:mt-6 font-bold text-[#e12454]">Health care facility</p>
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mt-2 text-[#223545] leading-snug">
        Would you rather stay <br /> at home than go into a health care facility?
      </h2>
    </div>
  </div>

  <div className="w-full sm:w-1/2 lg:w-2/5 mt-12 sm:mt-16 md:mt-20 flex justify-center p-4">
    <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </div>
</div>


<section className="px-[15%]">
          <Cards_Services cards={cardsInfoServices} 
                        cards_styles = {stylesServices.cards_styles}
                        card_styles = {stylesServices.card_styles}
                        img_styles = {stylesServices.img_styles}
                        shadowColor = {stylesServices.card_styles.shadowColor}
                        title_styles = {stylesServices.title_styles}
                        colorHoverTitle = {stylesServices.title_styles.colorHoverTitle}
                        content_styles = {stylesServices.content_styles}
                        colorHoverContent = {stylesServices.content_styles.colorHoverContent}
          ></Cards_Services>
  </section>





  <div
      className="relative inset-0 w-full bg-cover bg-no-repeat md:flex justify-between xl:px-32 lg:px-20 sm:px-2 items-center py-[120px] bg-center h-full mb-[30px]"
      style={{ backgroundImage: "url('./img/calculate-bg.png')" }}
    >
      <div className="absolute inset-0 bg-[#344755] opacity-90"></div>
      <div className="relative inset-0 flex flex-col lg:flex-row justify-center text-start text-white md:justify-evenly sm:justify-center mx-auto gap-[150px]">
        <div className="flex justify-center flex-col">
          <p className="text-lg font-semibold text-[#b4c7d6]">MAKE A CALL</p>
          <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold mt-2">Quote Calculator</p>
          <p className="text-base sm:text-2xl lg:text-3xl mt-4 text-[#b4c7d6] mb-10">
            If you require services on a public holiday, <br /> overnight services or live-in services, please <br /> call (+00)888.666.88 so we can discuss <br /> prices with you.
          </p>
          <a href="/appointment" data-discover="true">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#8fb569] text-white h-[62px] w-[285px] hover:bg-[#e12454] shadow-[0px_2px_8px_#8fb569] hover:shadow-[0px_2px_8px_#e12454] transition-all duration-300 ease-in-out">
              <span className="flex items-center justify-center pb-1 w-14 h-14 rounded-full bg-white text-[#0a0a0a] text-2xl ml-[-48px] mr-5">+</span>
              MAKE APPOINTMENT
            </button>
          </a>
        </div>
        <div className="flex bg-white text-black w-[90%] max-w-[450px] h-[500px] rounded mx-auto my-auto sm:w-[90%] sm:h-[480px] sm:flex sm:justify-center md:w-[450px] md:h-[575px] lg:w-[450px] lg:h-[575px]">

          //Form
          <form className="mt-6 flex flex-col gap-5 justify-end mx-auto w-full sm:w-auto">
            <input className="flex h-16 w-full text-[#647489] items-center mx-auto justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-8 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" type="tel" placeholder="Your Phone number" />
            <button className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-white shadow-[0px_2px_8px_#e12454] hover:shadow-[0px_2px_8px_#8fb569] transition-all duration-300 ease-in-out h-[60px] w-full bg-[#e12454] hover:bg-[#8fb569] rounded-none flex mx-auto" type="submit">
              SUBMIT QUERY
            </button>
          </form>
        </div>
      </div>
    </div>


  <div className="flex flex-col lg:flex-row justify-between gap-10 bg-white w-[80%] mx-auto shadow-lg mt-20 p-6">
      <div className="flex justify-center">
        <img
          src='./img/hire1.jpg'
          alt="Doctor"
          className="w-[600px] h-[500px] object-cover"
        />
      </div>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[530px] my-auto flex flex-col lg:mr-10">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#223545]">
          For Employers
        </h2>
        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-500 my-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="/contact">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#8fb569] text-white h-[62px] w-[230px] hover:bg-[#e12454] shadow-md hover:shadow-lg transition-all duration-300 ease-in-out mb-10">
            <span className="flex items-center justify-center pb-1 w-14 h-14 rounded-full bg-white text-[#0a0a0a] text-2xl ml-[-48px] mr-5">
              +
            </span>
            CONTACT US
          </button>
        </a>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-between bg-white w-[80%] mx-auto shadow-lg mb-[120px] p-6">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[530px] my-auto flex flex-col lg:ml-10">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#223545] mt-10">
          For Employers
        </h2>
        <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-500 my-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="/contact">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-[#e12454] hover:bg-[#8fb569] h-[62px] w-[230px] mb-10">
            <span className="flex items-center justify-center pb-1 w-14 h-14 rounded-full bg-white text-[#0a0a0a] text-2xl ml-[-48px] mr-5">
              +
            </span>
            APPLY TODAY
          </button>
        </a>
      </div>
      <div className="flex justify-center">
        <img src='./img/hire2.jpg' alt="Doctor" className="object-cover" />
      </div>
    </div>
        </>
    );
};
