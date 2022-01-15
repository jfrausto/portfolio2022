import React from 'react';
import {
  Center,
  Box,
  Flex,
  Stack,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { QuickFactsCard } from './QuickFactsCard';
import { Container } from '../Container';
import { AboutMeTabs } from './AboutMeTabs';
import { Headshot } from './Headshot';

export const AboutMe:React.FC = () => {
  return (
    <>
      <Container
        id="about"
        pt={"9vh"}
        pb={10}
      >
        {/* responsive stack stack */}
        <Stack
          direction={["column", "column", "column", "row"]}
          justifyContent="center"
          justifyItems="center"
          alignItems="center"
          p={2}
        >

          {/* left side */}

          <Flex
            flexDirection="column"
            wrap="nowrap"
            justifyContent="space-around"
            alignItems="center"
            position={"relative"}
            right={[0,0,0,"5vw"]}
            maxW={["84vw","70vw", "65vw", "37vw" ]}
            minH="460px"
            borderRadius="md"
            mb={[8, 8,8,0]}
          >
            <Heading
              size="4xl"
              p={4}
              px={10}
              borderRadius={"3xl"}
              textAlign="center"
            >
              Hi there!
            </Heading>
            <Headshot />
            <QuickFactsCard />
          </Flex>

          {/* right side */}

          <Flex
            position={"relative"}
            top={4}
            left={[0,0,0,"5vw"]}
            justifyContent="center"
            alignItems="center"
            // ml={[0,0,0,16]}
            p={[1,3,3,3]}
            pt={2}
            borderRadius="2xl"
            // border="1px solid #c9c9c9"
            maxWidth={["88vw", "70vw", "70vw", "550px"]}
            // bg="linear-gradient(43deg, rgba(205,30,30,0.75) 0%, rgba(199,79,79,0.75) 93%)"
            // bg="radial-gradient(circle, rgba(40,25,25,0.80) 15%, rgba(101,0,0,0.78) 100%)"
            // bg="radial-gradient(circle, rgba(101,0,0,0.78) 15%, rgba(40,25,25,0.90) 100%)"
            bg="radial-gradient(ellipse at left center, rgba(208,138,138,0.25) 0%, rgba(56,67,100,0.50) 80%)"

            // bg="linear-gradient(45deg, rgba(40,25,25,0.80) 0%, rgba(101,0,0,0.78) 100%)"
          >
            <AboutMeTabs />
          </Flex>

        </Stack>
    </Container>

    </>
  )
}
