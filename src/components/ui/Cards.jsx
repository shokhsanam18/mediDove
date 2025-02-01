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
  React.forwardRef(({ className, cards, cards_styles, card_styles, ...props }, ref) => {

  // const card_styles = {

  // }

  return (
    <Cards ref={ref}
    {...props} style={cards_styles}>

     
      {cards.map((card) => (
        <Card key={card.id} ref={ref}
        className={cn(className)} 
        style = {card_styles}
        {...props}>
            <CardImage>
              <CardImg src={card.src}></CardImg>
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
