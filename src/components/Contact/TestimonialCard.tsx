import React from 'react';
import { Flex, Avatar, Text, VStack, Link } from '@chakra-ui/react';

interface TestimonialCardProps{
  quote: string,
  author: string,
  githubSrc?: string,
  job: string,
  imgSrc: string, 
  firstAndLastName: string, 
  flexDirection: "row" | "row-reverse",
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ imgSrc, githubSrc, firstAndLastName, flexDirection, quote, author, job }) => {
  return (
    <>
      <Flex
        flexDirection={flexDirection}
        flexWrap="nowrap"
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="center"
        style={{ 
          gap: "10px"
        }}
      >
        {/* photo circle */}
        <VStack
          mx={1}
        >

        <Avatar 
          name={firstAndLastName} 
          boxSize={[90,20,24,28]}
          src={imgSrc} 
        />
          {githubSrc ? <Link textAlign={"center"}
            href={githubSrc ? githubSrc : "#contact"}
            isExternal
            
          >
            <u>{author}</u>
          </Link> : <Text textAlign={"center"}> {author} </Text>
          }
        <Text
          as="i"
          position={"relative"}
          top={-3}
          maxW={"100%"}
          textAlign={"center"}
        >
          {job}
        </Text>
        </VStack>

        {/* quote
          order={2} to reverse the middle order
        */}
        <Text
          fontSize={["sm", "md", "lg", "lg"]}
          maxW={["51vw", "50vw", "55vw", "640px"]}
          fontStyle="italic"
          textAlign={"center"}
          mx={1}
          px={[2, 2, 4, 4]}
          py={2}
        >
          "{quote}"
        </Text>

      </Flex>
    </>
  )
}

