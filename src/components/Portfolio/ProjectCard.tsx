import React from 'react';
import { chakra, Flex, Heading, Text, LinkBox, Box, 
  List, ListItem, ListIcon, ButtonGroup, Button } from '@chakra-ui/react';
import { SettingsIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: string,
  video: any,
  prod: string,
  code: string,
  tags: any,
  desc: string
}


export const ProjectCard:React.FC<ProjectCardProps> = ({ project, video, prod, code, tags, desc}) => {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        // backgroundImage={"linear-gradient(45deg, rgba(14,62,156,1) 0%, rgba(14,62,156,1) 43%, rgba(31,92,157,1) 60%, rgba(45,98,181,1) 69%, rgba(78,94,162,1) 100%)"}
        // backgroundImage={"radial-gradient(circle, rgba(78,94,162,0.95) 12%, rgba(66,77,110,0.75) 65%)"}
        backgroundImage={"linear-gradient(48deg, rgba(56,67,100,0.50) 28%, rgba(58,74,248,0.50) 49%, rgba(56,67,100,0.50) 72%)"}
        // backgroundImage={"radial-gradient(circle, rgba(138,177,233,0.650) 12%, rgba(66,77,110,0.75) 65%)"}
        backgroundAttachment={"fixed"}
        backgroundSize={"cover"}
        borderRadius={"2xl"}
        maxW={['80vw', '500px', '500px', '500px']}
        p={3}
        m={4}
      >

        <Heading m={3}>
          {project}
        </Heading>

        <Box m={3}>          
          <video autoPlay={true} loop={true}>
            <source src={video} type="video/mp4" />
          </video>
        </Box>

        <Text m={2} pb={4} pl={1.5}>
          {desc}
        </Text>

        <List mx={3} my={1}>
          <ListItem pl={1} pb={2}>
            <ListIcon as={SettingsIcon} boxSize={[5,6,6,6]} />
            <chakra.span
              position={"relative"}
              top={[-0.5,-1,-1,-1]}
              left={1}
            >{tags}</chakra.span>
            {/* <Text mt={0.5}>{tags}</Text> */}
          </ListItem>
        </List>

        <LinkBox as={ButtonGroup} 
          variant="solid" 
          m={3}
          spacing={['3', '5', '5', '5']}
          // pl={1}
        >
          {/* <LinkOverlay href={code}> */}
            <Button leftIcon={<FaGithub />} as='a' href={code} >
              source
            </Button>
          {/* </LinkOverlay> */}

          {/* <LinkOverlay href={prod}> */}
            <Button rightIcon={<ExternalLinkIcon/>} colorScheme={'blue'} as='a' href={prod}>
              visit app
            </Button>
          {/* </LinkOverlay> */}
        </LinkBox>
      </Flex>
    </>
  )
}

