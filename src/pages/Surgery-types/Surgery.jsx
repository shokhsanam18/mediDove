import React from "react";
import Typography from "@/components/ui/Typography";
import { Cards_Services } from "@/components/ui/Cards";


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
      <img className="w-24 sm:w-36 lg:w-48" src="/assets/back_icon-XmwR2K38.png" alt="back" />
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

        </>
    );
};
