import { Cards_Services } from "@/components/ui/Cards";
import Typography from "@/components/ui/Typography";
import React from "react";

export const Departments = () => {

  const cardsInfoServices = [
    {
      id: 0,
      title: 'Body Surgery',
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
      title: 'service-content',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      content: 'Read More',
      footer: 'Card Footer',
      src: './img/service3.png'
    },
    {
      id: 3,
      title: 'Blood Cancer',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      content: 'Read More',
      footer: 'Card Footer',
      src: './img/service4.png'
    },
    {
      id: 4,
      title: 'Neurology Sargery',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      content: 'Read More',
      footer: 'Card Footer',
      src: './img/service5.png'
    },
    {
      id: 5,
      title: 'Allergic Issue',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      content: 'Read More',
      footer: 'Card Footer',
      src: './img/service6.png'
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
     textAlign: 'center',
     alignItems: 'center',
     justifyContent: 'center',
     shadowColor: '#AACA',
   },
   img_styles: {
    width: '55%',
   },
   title_styles: {
    fontSize: '1.28rem',
    color: '#223645',
    colorHoverTitle: '#73bb1d',
   },
   content_styles: {
    fontWeight: '700',
    color: '#808e96',
    colorHoverContent: '#73bb1d',
   },
    
  }
  return <>
  <section className="sm:px-[5%] px-[2%] pt-7 pb-16 w-full flex gap-12 flex-col text-center bg-[#F4F9FC]">
      <div className="flex items-center justify-center md:flex-row flex-col gap-3">
        <div
          className="bg-center bg-no-repeat sm:w-full"
          style={{ backgroundImage: "url('/img/bgnurse.png')" }}
        >
          <Typography variant="p" className={`font-semibold`}>
            Departments
          </Typography>
          <Typography
            variant="h2"
            className={`w-full md:w-1/2 m-auto`}
          >
            Managed Your Heathcare Services
          </Typography>
          <div className="w-32 m-auto my-5 h-1 bg-[linear-gradient(to_right,red_50%,transparent_50%)] bg-[length:15px_100%]"></div>
        </div>
      </div>
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
  </>;
};
