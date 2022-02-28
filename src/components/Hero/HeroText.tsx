import { Flex, Heading } from '@chakra-ui/react'


export const HeroText = () => (
  <Flex
    direction={"column"}
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bg="transparent"
    // pl={"13vw"}
    pl={["9vw","11vw", "11vw","17vw"]}
    // bgGradient="radial-gradient(circle, rgba(238,174,174,1) 0%, rgba(148,187,233,1) 100%)"
    // bg="linear-gradient(rgba(238,208,208,0.58) 19%, rgba(148,187,233,0.70) 50%, rgba(248,248,255,0.80) 73%)"
    // bg="linear-gradient(#e66465, #9198e5)"

    maxW={["49vw", "50vw", "50vw", "43vw"]}
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
      fontSize={["3xl", "5xl", "6xl", "7xl"]} 
      textAlign={"left"}
      bgGradient="linear-gradient(rgba(248,248,255,0.80) 13%, rgba(80,101,146,0.98) 50%, rgba(248,248,255,0.80) 83%)"
      bgClip={"text"}
      // textShadow={""}


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

