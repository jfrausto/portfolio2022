import React from 'react';
import {Flex, Text, Heading} from '@chakra-ui/react'

export const Bio:React.FC = () => {
  return (
    <>
      <Flex
        w="100%"
        flexFlow="column nowrap"
        minH="590px"
        pl={[1, 2 ,3, 4]}
        overflowY="auto"
      >

      <Heading
        size="lg"
        mb={4}
      >
        A little about me
      </Heading>
      <Text
        fontSize="sm"
        maxW="90%"
      > 
        Welcome! I’m from East Los Angeles, California and I love coding, creating, and exploring the web. 
        I have a passion for building intuitive applications that are useful and fun to navigate. 
        I enjoy using technology such as JavaScript, React, and NodeJs
        to capture the client's mission and deliver a product with clear, concise, and robust code.
      </Text>
      <br/>
      <Text
        fontSize="sm"
        maxW="90%"
      >
        When I work with a team my role is best described as a "glue" guy. 
        I like to keep morale and productivity high by looking at the bright side of things to keep the team together. 
        Communication is very important to me and I believe it is the cornerstone for any successful project. 
        I value high spirits during the development process as it always seems help create a better product.
      </Text>
      <br/>
      <Text
        fontSize="sm"
        maxW="90%"
      >
        The bottom line is I love to solve problems. 
        I live for those "Aha!" breakthrough moments! 
        I like working on back-end development figuring out the underlying connections and intricacies in each application I build.
        Working on front-end development, putting on the "makeup", and creating responsive web design is a joy. 
        I like working with different types of people. 
        I believe this passion during the development process can be felt by the people around me, 
        and creates a product that exceeds expectations.
      </Text>
      </Flex>
    </>
  )
}

