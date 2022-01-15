import React from 'react';
import { Flex, Icon, Link}  from '@chakra-ui/react';
import type { IconType } from 'react-icons'

interface ContactCardLinkProps {
  iconImg: IconType,
  link: string
  text: string
};

export const ContactCardLink: React.FC<ContactCardLinkProps> = ({iconImg, link, text}) => {
  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        wrap="nowrap"
        alignItems="center"
        my={2}
      >
        <Icon
          as={iconImg}
          w={12}
          h={12}
          pr={4}
        />
        <Link href={link} isExternal>
          {text}
        </Link>
      </Flex>
    </>
  )
}
