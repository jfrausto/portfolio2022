import React from 'react';
import {Flex, Text, Link} from '@chakra-ui/react';

export const FixedNavBar:React.FC = () => {
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        position="fixed"
        top={0}
        pt={1}
        px={[1,4,8,32]}
        minHeight="8vh"
        width="100vw"
        bg="radial-gradient(circle, rgba(23,23,41,0.80) 55%, rgba(8,8,10,0.95) 100%)"
        style={{ 
          backdropFilter: "blur(12px)"
        }}
        borderBottom="1px solid #737373"
        zIndex={99}
      >
        <Link
          mr={3}
          href="#hero"
        >
          Jesse Frausto
        </Link>
        <Link
          href="#about"
          ml={[2,2,16,24]}
          mr={[1,2,-4,-8]}
        >
          about
        </Link>
        <Link
          mr={[1,2,-4,-8]}
          href="#work"
          >
          portfolio
        </Link>
        <Link
        href="#contact"
        >
          connect
        </Link>
      </Flex>
    </>
  )
}
