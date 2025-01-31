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



const Carding = React.forwardRef(({ className, ...props }, ref) => {
  const cards = [
    {
      id: 0,
      title: 'Card Title',
      description: 'Card Description',
      content: 'Card Content',
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
  ]
  return (
    <Cards ref={ref}
    {...props}>

     
      {cards.map((card) => (
        <Card key={card.id} ref={ref}
        className={cn("px-8 py-4", className)}
        {...props}>
            <CardImage>
              <CardImg src={card.src}></CardImg>
            </CardImage>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
            <CardFooter>
              <p>{card.footer}</p>
            </CardFooter>
        </Card>
      ))}

      </Cards>
  )
})

export default Carding