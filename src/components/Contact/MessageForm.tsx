import React, {useState, useEffect} from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Input,
  Textarea,
  ScaleFade,
  useDisclosure,
  Text
} from '@chakra-ui/react';

interface MessageFormProps {
  setValidSend: React.Dispatch<React.SetStateAction<boolean>>,
  // nameVal: string,
  // msgVal: string,

}

export const MessageForm: React.FC<MessageFormProps> = ({setValidSend}) => {

  const [nameVal, setNameVal] = useState<string>("");
  const [msgVal, setMsgVal] = useState<string>("");
  const { isOpen, onOpen, onToggle } = useDisclosure();


  useEffect(() => {
    if((nameVal.length <= 0) ||
    (msgVal.length <= 0 || msgVal.length >= 320)
    ) setValidSend(false);
    else setValidSend(true);
    return () => {
      
    }
  }, [nameVal, msgVal])

  useEffect(() => {

    if(msgVal.length!==0) onToggle();
    return () => {
      onOpen();
    }
  }, [msgVal.length===320])

  const handleTextareaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement;
    const taVal = textarea.value;
    setMsgVal(taVal);
  };
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const nameInput = e.target as HTMLTextAreaElement;
    const niVal = nameInput.value;
    setNameVal(niVal);
  };

  return (
    <>
      <VStack>
        <FormControl isRequired
          isInvalid={nameVal.length <= 0 || nameVal.length > 30 }
        >
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input 
            id='name' 
            placeholder='Leave your name'
            value={nameVal} 
            onChange={handleNameChange}
            maxLength={30}
          />
        </FormControl>
        <FormControl isRequired
        >
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea 
            maxLength={320}
            value={msgVal}
            placeholder='Leave a message'
            onChange={handleTextareaChange}
            isInvalid={msgVal.length <= 0 || msgVal.length >= 320 }
            h={"200px"}
          />
            
            <ScaleFade
              initialScale={0.9}
              in={isOpen}
            >
              <Text
                mt={1}
                color={"red.300"}>
                Message too long!
              </Text>
            </ScaleFade>
        </FormControl>
      </VStack>
    </>
  )
}
