import React from 'react';
import { FaHome, FaItunesNote, FaSeedling, FaFire } from "react-icons/fa";
import {Grid } from '@chakra-ui/react';
import {QuickFact} from './QuickFact';

export const QuickFactsCard: React.FC = () => {
  return (
    <>
      <Grid
        // bg={"linear-gradient(43deg, rgba(32,34,47,1) 0%, rgba(45,49,80,1) 96%)"}
        // bg={"linear-gradient(180deg, rgba(45,49,80,0.70) 0%, rgba(49,52,71,0.70) 95%)"}
        // bg="linear-gradient(45deg, rgba(40,25,25,1) 0%, rgba(69,13,13,1) 71%, rgba(64,0,0,0.85) 91%)"
        bg="radial-gradient(ellipse at center top, rgba(208,138,138,0.27) 0%, rgba(56,67,100,0.50) 75%)"
        borderRadius={"2xl"}
        p={[1, 3, 3, 4]}
        px={[2, 4, 8, 8]}
        templateColumns={["162px 162px", "180px 190px", "200px 210x", "200px 210x"]}
        templateRows={"65px 65px"}
        columnGap={["0px", "5px", "30px", "30px"]}
        rowGap={"5px"}
        color={"gray.100"}
        
      >
        <QuickFact
          icon={FaHome}
          heading={"Hometown"}
          snippet={"East Los Angeles, CA"}
        />
        <QuickFact 
          icon={FaSeedling}
          heading={"Now Learning"}
          snippet={"TypeScript, Prisma, tRPC"}
        />
        <QuickFact 
          icon={FaItunesNote}
          heading={"Music"}
          snippet={"Funk, Psych, R&B"}
        />
        <QuickFact 
          icon={FaFire}
          heading={"Current Interests"}
          snippet={"Cryptos, Music Production"}
        />
      </Grid>




    </>
  )
}

