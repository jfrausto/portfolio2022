import React from 'react';
import {Flex, Image as ChakraImage, Box } from '@chakra-ui/react'

export const Headshot:React.FC = () => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        // maxW={["85vw","90vw", "55vw", "600px" ]}
        mx={0}
        mt={6}
        mb={10}
      >
        {/* bg gradient on bg box; image is a .png */}
        <Box
          // bg="radial-gradient(circle, rgba(238,174,174,0.55) 5%, rgba(148,187,233,0.80) 75%)"
          // bg="radial-gradient(circle, rgba(238,174,174,0.45) 5%, rgba(78,94,162,0.75) 75%)"
          bg="radial-gradient(circle, rgba(254,100,100,0.35) 5%, rgba(56,67,100,0.50) 75%)"
          borderRadius="50%"
        >
          <ChakraImage
            justifyContent="center"
            justifyItems="center"
            alignContent="center"
            src='/static/images/jesse-transparent-discord.png'
            objectFit="cover"
            height={["305px", "420px", "420px", "420px"]}
            width={["305px", "420px", "420px", "420px"]}
            borderRadius="50%"
            alt="it's me!"
          />
        </Box>

      </Flex>
    </>
  )
}

