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
        px={4}
      >

        <Heading size={"xl"}>
          Testimonials
        </Heading>
      
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          justifyContent="space-around"
          alignItems="center"
          p={[2,4,4,8]}
          pt={6}
          my={["30px", "40px", "40px" ,"50px"]}
          minH={"520px"}
          bg={"radial-gradient(circle at top left, rgba(208,138,138,0.38) 4%,  rgba(56,67,100,0.40) 55%), radial-gradient(circle at bottom right, rgba(68,79,185,0.55) 5%, rgba(49,60,90,0.40) 65%)"}
          borderRadius={"2xl"}
          style={{ 
            gap: "15px"
          }}
        > 

          <TestimonialCard

            // mb={2}
            imgSrc="/static/images/J_PEREZ_2022.jpeg" 
            firstAndLastName="Jose Perez Jr" 
            flexDirection="row"
            job="Web Developer"
            author="Jose Perez Jr."
            githubSrc='https://github.com/JOCECODE'
            quote="Intelligent, diligent, and hard-working. Jesse fulfills the role of 'Point-Man' and displays a high sense of pride in his work. Determined and even-keeled, he instills confidence in his team. Above all, he's the best coding partner you can ask for!"
          />
          <TestimonialCard

            imgSrc="/static/images/M_MORENO_2022.jpg" 
            firstAndLastName="Michael Moreno" 
            flexDirection="row-reverse"
            author="Michael Moreno"
            githubSrc='https://github.com/mgmoreno22'
            job="Web/UX Developer"
            quote="During every step of our projects, Jesse constantly proved to be one of the most reliable members of our teams showing up with new creative and technical ideas that would move our project in the direction we needed. He was very capable of thinking outside of the box to find solutions to whatever limitations we would face during the creation of our product."
          />
          <TestimonialCard

            imgSrc="/static/images/C_KINNEY_2022_PHOTO.JPG" 
            firstAndLastName="Courtney Kinney" 
            flexDirection="row"
            author="Courtney Kinney"
            job="DUSD Teacher"
            quote="Working with Mr. Frausto has been an honor. He has been the epitome of how one should work within a team and shown his strength as a leader within his peers. Mr. Frausto has been a pleasure to work with each and every day."
          />
        </Flex> 
      </Flex>
    </>
  )
}

