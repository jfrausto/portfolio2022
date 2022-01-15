import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

export const ContactHeading: React.FC = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          size="4xl"
          textAlign="center"
        >
          Let's Work Together
        </Heading>
      </Flex>
    </>
  )
}

