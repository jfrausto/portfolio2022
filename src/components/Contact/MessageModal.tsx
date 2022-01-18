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
import { trpc } from '../../utils/trpc';



export const MessageModal:React.FC = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();
  // const finalRef = useRef();
  const [isValidSend, setValidSend ] = useState(false);
  const [hasBeenSent, setHasBeenSent] = useState(false);
  // const {data, refetch}= trpc.useQuery(["send-me-a-dm", {from:"Jesse", text: "YOOOO"}], {
  //   refetchOnWindowFocus: false,
  //   enabled: hasBeenSent
  // });
  // console.log(data?.testingThis);
  console.log("refresh message modal");


  // const [nameVal, setNameVal] = useState<string>("");
  // const [msgVal, setMsgVal] = useState<string>("");

  // bring states of the form up to this parent level
  // pass down the callbacks to update the parent state to the child

  const msgDone = () => {
    setHasBeenSent(false);
  }

  const sendMsgHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // refetch();
    setHasBeenSent(true);
    // console.log(data?.testingThis);
    console.log("wow");
    msgDone();
  };


  


  return (
    <>
      <Button
        // px={"-10px"}
        // ref={finalRef}
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
        // finalFocusRef={finalRef} 
        isOpen={isOpen} 
        onClose={onClose}
      >
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
                onClick={sendMsgHandler}
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
