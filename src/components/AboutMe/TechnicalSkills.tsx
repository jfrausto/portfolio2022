import React from 'react';
import {Flex, Heading, Grid, List, ListItem, ListIcon } from '@chakra-ui/react';
import { techSkillsWithIcon } from './TechSkillsAndIcons';

export const TechnicalSkills: React.FC = () => {

  return (
    <>
      <Flex 
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        minH="590px"
        pl={[1, 2 ,3, 4]}
      >
        <Heading 
          size="lg"
          mb={4}
        >
          Experience with:
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" 
          columnGap={[4,16,32,32]}
          rowGap={[4,4,4,4]}
          p={1} 
        >
          {
            techSkillsWithIcon.map( (elem) => {
              return (<Flex 
                w="100%" 
                direction="column" 
                justifyContent="center" 
                alignItems="flex-start"
                pl={[0, 3,3,5]} 
                h="10"
                key={elem.skill}
              >
                <List>
                  <ListItem>
                    <ListIcon as={elem.icon} boxSize={6} mb={-1} color="gray.200"/>
                    {elem.skill}
                  </ListItem>
                </List>
              </Flex>)
            }
            )
          }
        </Grid>
      </Flex>
    </>
  )
};
