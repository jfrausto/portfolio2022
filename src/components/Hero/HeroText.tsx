import { Flex, Heading } from '@chakra-ui/react'


export const HeroText = () => (
  <Flex
    direction={"column"}
    justifyContent="center"
    alignItems="center"
    height="100vh"
    // bgGradient="radial-gradient(circle, rgba(238,174,174,1) 0%, rgba(148,187,233,1) 100%)"
    // bg="linear-gradient(rgba(238,208,208,0.58) 19%, rgba(148,187,233,0.70) 50%, rgba(248,248,255,0.80) 73%)"
    // bg="linear-gradient(#e66465, #9198e5)"

    maxW={["75vw", "60vw", "60vw", "50vw"]}
    position={"relative"}
    zIndex={2}
    // bgClip="text"
    // bgClip={""}
    // style={{ 
    // //   backgroundClip: "text",
    //   WebkitBackgroundClip: "text"
    // }}

  >
    <Heading 
      fontSize={["5xl", "6xl", "8xl", "8xl"]} 
      textAlign={"center"}
      bgGradient="linear-gradient(rgba(238,208,208,0.58) 19%, rgba(148,187,233,0.70) 50%, rgba(248,248,255,0.80) 73%)"
      bgClip={"text"}
      // style={{ 
      //   WebkitBackgroundClip: "text",
      //   backgroundClip: "text"
      //  }}
      >
        Jesse Frausto.<br />
        Full-Stack Web Developer.
      </Heading>
    {/* <Heading fontSize={["5xl", "6xl", "8xl", "8xl"]} textAlign={"center"}>Full-Stack Web Developer.</Heading> */}
  </Flex>
)

