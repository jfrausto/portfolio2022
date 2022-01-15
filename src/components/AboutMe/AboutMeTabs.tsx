import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel,
 } from "@chakra-ui/react";
import { TechnicalSkills } from './TechnicalSkills';
import { Bio } from './Bio';

export const AboutMeTabs: React.FC = () => {

  return (
    <>
        <Tabs 
          width={["360px", "500px" ,"550px", "550px"]}
          isFitted 
          variant="solid-rounded"
          colorScheme={"red"}
          pt={3}
          color={"gray.100"}
        >
          <TabList
            maxWidth={["60vw", "50vw", "40vw", "17vw"]}
            mx="auto"
          >
            <Tab 
              mr={4} 
              boxSize={16} 
              fontSize={19} 
              
            >
              me
            </Tab>
            <Tab 
              mr={4} 
              boxSize={16} 
              fontSize={19} 
            >
              technical
            </Tab>
            
          </TabList>
          <TabPanels
            pt={2}
          >
            <TabPanel>
              <Bio/>
            </TabPanel>
            <TabPanel>
              <TechnicalSkills/>
            </TabPanel>
          </TabPanels>
        </Tabs>

    </>
  )
}

