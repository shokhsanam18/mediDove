import React from "react";
import {Cards_Services} from "../components/ui/Cards";

export const Test = () => {
  const cardsInfo = [
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
      title: 'Card Title',
      description: 'Card Description',
      content: 'Card Content',
      footer: 'Card Footer',
      src: './img/service2.png'
    },
    {
      id: 2,
      title: 'Card Title',
      description: 'Card Description',
      content: 'Card Content',
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
  const styles = {
    cards_styles: {
     backgroundColor: 'white',
     // justifyContent: 'space-around',
     columnGap: '1.25rem',
     rowGap: '0.75rem',
     padding: '10px 15%',
   },
   card_styles: {
     backgroundColor: 'white',
     color: 'black',
     padding: '1rem 3rem',
     gap: '1rem',
     // border: '1px solid',
     textAlign: 'center',
     alignItems: 'center',
     justifyContent: 'center',
     shadowColor: '#AAC',
   },
   img_styles: {
    width: '75%',
    // border: '2px solid',
   },
  //  title_styles: {

  //  }
    
  }
  return (
    <>
      <Cards_Services cards={cardsInfo} 
              cards_styles = {styles.cards_styles}
              card_styles = {styles.card_styles}
              img_styles = {styles.img_styles}
              shadowColor = {styles.card_styles.shadowColor}
      ></Cards_Services>
    </>
  );
};


