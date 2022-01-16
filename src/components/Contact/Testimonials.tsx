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
            imgSrc="/static/images/JOSE_PEREZ_2022_PHOTO.png" 
            firstAndLastName="Jose Perez Jr" 
            flexDirection="row"
            author="Jose Perez Jr."
            quote="Intelligent, diligent, and hard-working. Jesse fulfills the role of 'Point-Man' and displays a high sense of pride in his work. Above all, he's the best coding partner you can ask for!"
          />
          <TestimonialCard 
            imgSrc="https://source.unsplash.com/3TLl_97HNJo/300x300" 
            firstAndLastName="Michael Moreno" 
            flexDirection="row-reverse"
            author="Michael Moreno"
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
          />
          <TestimonialCard 
            imgSrc="/static/images/C_KINNEY_2022_PHOTO.JPG" 
            firstAndLastName="Courtney Kinney" 
            flexDirection="row"
            author="Courtney Kinney"
            quote="Working with Mr. Frausto has been an honor. He has been the epitome of how one should work within a team and shown his strength as a leader within his peers. Mr. Frausto has been a pleasure to work with each and every day."
          />
        </Flex> 
      </Flex>
    </>
  )
}

