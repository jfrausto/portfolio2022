import React from 'react';
import { Box } from '@chakra-ui/react';

export const HeroLeftSide:React.FC = () => {
  return (
    <>
    {/* fixed bg left side 50% */}
      <Box
        zIndex={2}
        position={"absolute"}
        top={0}
        left={0}
        h={"100vh"}
        w={"50%"}
        // bg="linear-gradient(333deg, rgba(12,12,12,1) 60%, rgba(53,80,129,0.91) 60%, rgba(26,33,47,1) 76%)"
        // bg="radial-gradient(ellipse farthest-corner at 260% 95%, rgba(12,12,12,1) 71%, rgba(53,80,129,0.91) 71%, rgba(26,33,47,1) 78%)"
        // bg="radial-gradient(circle farthest-corner at bottom right, rgba(15,15,30,1) 74%, rgba(53,80,129,0.91) 74%, rgba(26,33,47,1) 86%)"
        bg="radial-gradient(circle farthest-corner at bottom right, rgba(17,17,33,1) 74%, rgba(208,128,128,0.38) 74%, rgba(13,13,29,1) 84%)"
      ></Box>
    </>
  )
}
