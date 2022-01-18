import React from 'react';
import {Flex, Heading, Spacer} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaGoogle, FaFileAlt } from "react-icons/fa";
import { ContactCardLink } from './ContactCardLink';
import { MessageModal } from './MessageModal';


export const ContactCard: React.FC = () => {
  console.log("refresh contact card");


  return (
    <>
      <Flex
        flexDirection="column"
        alignContent="space-around"
        justifyContent="space-evenly"
        alignItems="center"
        w="75vw"
        minH="600px"
        // bg="blue.600"
      >
        <Heading size={"xl"}>
          Contact Me
        </Heading>
        {/* links */}
        <Flex
          p={8}
          bg={"radial-gradient(circle at bottom left, rgba(208,138,138,0.38) 4%,  rgba(56,67,100,0.40) 55%), radial-gradient(circle at top right, rgba(68,79,185,0.55) 5%, rgba(49,60,90,0.40) 65%)"}
          borderRadius={"2xl"}
          h={["420px", "420px", "420px", "420px"]}
          flexDirection="column"
          alignContent="flex-start"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <ContactCardLink
            iconImg={FaGithub}
            link={"https://github.com/jfrausto"}
            text={"Github"}
          />
          <ContactCardLink
            iconImg={FaLinkedin}
            link={"https://www.linkedin.com/in/jesse-f-9182331ab/"}
            text={"LinkedIn"}
          />
          <ContactCardLink
            iconImg={FaGoogle}
            link={"mailto:fraustojesse24@gmail.com"}
            text={"fraustojesse24@gmail.com"}
          />
          <ContactCardLink
            iconImg={FaFileAlt}
            link={"https://chakra-ui.com"}
            text={"Resume"}
          />

          <Spacer/>
          <MessageModal />

        </Flex>
      </Flex>
    </>
  )
}

