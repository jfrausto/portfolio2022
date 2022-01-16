import React, {useRef, useEffect, useState} from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
  Flex
} from '@chakra-ui/react';
import { MessageForm } from './MessageForm';

export const MessageModal:React.FC = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();
  const finalRef = useRef();
  const [isValidSend, setValidSend ] = useState(false);

  return (
    <>
      <Button
        // px={"-10px"}
        ref={finalRef}
        // alignSelf={"fl"}
        // justifySelf={"flex-end"}
        // flexGrow={}
        onClick={onOpen}
        w={"100%"}
        h={"60px"}
        colorScheme={"blue"}
      >
        Leave a Message
      </Button>
      <Modal 
        // minH={"50vh"}
        finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minH={"500px"}
          // maxW={"89vw"}
          mx={4}
          top={0}
          // bg={"transparent"}
        >
          <ModalHeader>Seriously, please say hello!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <MessageForm 
                setValidSend={setValidSend}
              />
          </ModalBody>

          <ModalFooter
            // bg={"red.700"}
          >
            <Flex
              w={"100%"}

            >
              <Button 
                w={"50%"}
                variant='outline'
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button 
                isDisabled={!isValidSend}
                colorScheme='blue'
                ml={3}
                w={"50%"}
              >
                Send
              </Button>
            </Flex>

        
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
