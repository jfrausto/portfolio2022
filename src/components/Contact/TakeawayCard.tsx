import React from 'react';
import {Flex, Icon, Text} from '@chakra-ui/react';

interface TakeawayCardProps {
  icon: any,
  cardText: string,
}

export const TakeawayCard: React.FC<TakeawayCardProps> = ({icon, cardText}) => {
  return (
    <>
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        justifyContent="space-around"
        alignItems="center"
        height={[72,80,80,80]}
        width={[60,64,64,64]}
        m={3}
        p={4}
        // bg={"radial-gradient(circle at 50% 32%, rgba(208,138,138,0.38) 0%, rgba(56,67,100,0.40) 45%), radial-gradient(circle at 50% 75%, rgba(68,79,185,0.85) 0%, rgba(49,60,90,0.40) 50%)"}
        bg={"radial-gradient(circle at top center, rgba(254,90,90,0.30) 10%, rgba(56,67,100,0.40) 55%), radial-gradient(circle at center bottom, rgba(58,69,255,0.55) 4%, rgba(49,60,90,0.40) 60%)"}
        borderRadius={"2xl"}
      >
        {/* large icon */}
        <Icon
          as={icon}
          m={2}
          mt={3}
          w={[20, 24, 24, 24]}
          h={[20, 24, 24, 24]}
        />
        {/* some text here: key point */}
        <Text
          fontSize={["17px", "17px", "18px", "18px"]}
          textAlign="center"
        >
          {cardText}
        </Text>
      </Flex>
    </>
  )
}

