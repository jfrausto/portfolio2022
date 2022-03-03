import { Flex, Heading, chakra } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';


export const HeroText = () => (

  <Flex
    direction={"column"}
    justifyContent="center"
    alignItems="flex-start"
    height="100vh"
    bg="transparent"
    gap={["10px", "15px", "20px", "20px"]}
    pl={["9vw","11vw", "11vw","17vw"]}
    maxW={["49vw", "50vw", "50vw", "43vw"]}
  >
    <Heading 
      fontSize={["2xl", "5xl", "6xl", "6xl"]} 
      textAlign={"left"}
      >
        <chakra.span position={"relative"} top={[-1, -1, -2, -2]}>Jesse Frausto. </chakra.span><br />
        <chakra.span 
          borderRadius={"xl"}
          background={"rgba(58, 74, 248, 0.76)"}
          px={2}
        >
          Full-Stack
        </chakra.span> 
        <br /> 
        Web Developer.
      </Heading>

      <Heading
        textAlign={"left"}
        fontSize={["md", "lg", "xl", "2xl"]} 
        borderRadius={"xl"}
        p={[1, 2, 2, 2]}
        background={"rgba(254, 89, 89, 0.67)"}
      >
        Let's Connect <ArrowForwardIcon pb={1} />
      </Heading>
  </Flex>
)

