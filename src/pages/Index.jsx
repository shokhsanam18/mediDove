import { Cards_Services } from "@/components/ui/Cards";
import React from "react";

export const Index = () => {

  const cardsInfoServices = [
    {
      id: 0,
      title: 'Dental Care',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      content: 'Read More',
      footer: 'Card Footer',
      src: './img/service2.png'
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
      src: './img/service2.png'
    },
    
    {
      id: 3,
      title: 'Card Title',
      description: 'Card Description',
      content: 'Card Content',
      footer: 'Card Footer',
      src: './img/service2.png'
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
  return <>
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
  </>;
};
