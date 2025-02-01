import * as React from 'react'
import { Link } from "react-router-dom";
import {
    Cards,
    Card,
    CardImage,
    CardImg,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { cn } from "@/lib/utils";



export const Cards_Services = 
  React.forwardRef(({ className, cards, 
    cards_styles, card_styles,
    img_styles, shadowColor, 
    title_styles, colorHoverTitle,
    content_styles, colorHoverContent, ...props }, ref) => {

  // const card_styles = {

  // }

  return (
    <Cards ref={ref}
    {...props} style={cards_styles}>

     
      {cards.map((card) => (
        <Card key={card.id} ref={ref}
        className={cn(className)}  
        style={card_styles}
        onMouseEnter={(e) => {e.currentTarget.style.boxShadow = `0 5px 10px ${shadowColor}`}}
        onMouseLeave={(e) => {e.currentTarget.style.boxShadow = 'none'}}
        {...props}>
            <CardImage style = {img_styles}>
              <CardImg src={card.src} style = {img_styles}></CardImg>
            </CardImage>
            {/* <CardHeader> */}
            <Link>
              <CardTitle style = {title_styles}
              onMouseEnter={(e) => {e.currentTarget.style.color = colorHoverTitle}}
              onMouseLeave={(e) => {e.currentTarget.style.color = title_styles.color}}
              >{card.title}</CardTitle>
            </Link>
              <CardDescription>{card.description}</CardDescription>
            {/* </CardHeader> */}
            <CardContent style = {content_styles} 
            onMouseEnter={(e) => {e.currentTarget.style.color = colorHoverContent}}
            onMouseLeave={(e) => {e.currentTarget.style.color = content_styles.color}}
            >
              <Link>
                {card.content}
              </Link>
            </CardContent>
            {/* <CardFooter>
              <p>{card.footer}</p>
            </CardFooter> */}
        </Card>
      ))}

      </Cards>
  )
})


// it is use case. don't call cards_services_use anywhere
// it is shown how it is going to be used

export const Cards_Services_Use = () => {
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
     textAlign: 'center',
     alignItems: 'center',
     justifyContent: 'center',
     shadowColor: '#AAC',
   },
   img_styles: {
    width: '75%',
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
      <Cards_Services cards={cardsInfo} 
              cards_styles = {styles.cards_styles}
              card_styles = {styles.card_styles}
              img_styles = {styles.img_styles}
              shadowColor = {styles.card_styles.shadowColor}
              title_styles = {styles.title_styles}
              colorHoverTitle = {styles.title_styles.colorHoverTitle}
              content_styles = {styles.content_styles}
              colorHoverContent = {styles.content_styles.colorHoverContent}
      ></Cards_Services>
    </>
  );
};