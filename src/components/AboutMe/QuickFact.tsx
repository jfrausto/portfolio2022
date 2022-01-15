import React from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';

interface QuickFactsProps {
  icon: any,
  heading: string,
  snippet: string
}

export const QuickFact: React.FC<QuickFactsProps> = ({icon, heading, snippet}) => {
  return (
    <>
      <Flex
        direction={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        
        <Icon as={icon} w={6} h={6} mt={2} />

        <Flex
          ml={3}
          direction={"column"}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
        >
          <Text
            fontWeight={"bold"}
            fontSize={["sm", "md", "md", "md"]}
          >
            {heading}
          </Text>

          <Text
            fontSize={["xs", "sm", "sm", "sm"]}
          >
            {snippet}
          </Text>

        </Flex>

      </Flex>
    </>
  )
};

