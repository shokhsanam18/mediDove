import * as React from 'react'
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
  React.forwardRef(({ className, cards, cards_styles, card_styles,img_styles, shadowColor, ...props }, ref) => {

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
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            {/* </CardHeader> */}
            <CardContent>
              <a href='#'>{card.content}</a>
            </CardContent>
            {/* <CardFooter>
              <p>{card.footer}</p>
            </CardFooter> */}
        </Card>
      ))}

      </Cards>
  )
})
