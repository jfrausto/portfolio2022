import React from 'react';
import { Flex , Heading} from '@chakra-ui/react';
import {TestimonialCard} from './TestimonialCard';

export const Testimonials: React.FC = () => {
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        alignContent={"space-around"}
      >

        <Heading size={"xl"}>
          Testimonials
        </Heading>
      
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          justifyContent="space-around"
          alignItems="center"
          p={[2,4,4,4]}
          my={["30px", "40px", "40px" ,"50px"]}
          minH={"520px"}
          bg={"radial-gradient(circle at top left, rgba(208,138,138,0.38) 4%,  rgba(56,67,100,0.40) 55%), radial-gradient(circle at bottom right, rgba(68,79,185,0.55) 5%, rgba(49,60,90,0.40) 65%)"}
          borderRadius={"2xl"}
        > 

          <TestimonialCard
            // mb={2}
            imgSrc="https://source.unsplash.com/3TLl_97HNJo/300x300" 
            firstAndLastName="Jesse Frausto" 
            flexDirection="row"
            author="Jose Perez Jr."
            quote="Intelligent, diligent, and hard-working. Jesse fulfills the role of 'Point-Man' and displays a high sense of pride in his work. Above all, he's the best coding partner you can ask for!"
          />
          <TestimonialCard 
            imgSrc="https://source.unsplash.com/3TLl_97HNJo/300x300" 
            firstAndLastName="Jesse Frausto" 
            flexDirection="row-reverse"
            author="Michael Moreno"
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
          />
          <TestimonialCard 
            imgSrc="https://source.unsplash.com/3TLl_97HNJo/300x300" 
            firstAndLastName="Jesse Frausto" 
            flexDirection="row"
            author="Courtney Kinney"
            quote="nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </Flex> 
      </Flex>
    </>
  )
}

