import React from 'react';
import {Flex } from '@chakra-ui/react';
import {FaLightbulb, FaWrench, FaHandshake} from 'react-icons/fa';
import { TakeawayCard } from './TakeawayCard';

export const Takeaways: React.FC = () => {
  return (
    <>
      <Flex
        my={["30px", "50px", "90px", "90px"]}
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="space-around"
        w={["85vw","85vw","85vw" ,"75vw"]}
      >
        {/* 3 takeaway card */}
        <TakeawayCard
          icon={FaLightbulb}
          cardText="I think outside the box. 
          I'm willing to try new ideas and workflows to accomplish our goals."
        />
        <TakeawayCard
          icon={FaWrench}
          cardText="I'm able to quickly learn new technologies and apply their core principles to projects efficiently."
        />
        <TakeawayCard
          icon={FaHandshake}
          cardText="I love building relationships and working with people of all walks of life. Let's create something great!"
        />
      </Flex>
    </>
  )
}

