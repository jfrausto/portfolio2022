import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {

  return (
    <Flex
      minHeight="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg="#111121"

      {...props}
    />
  )
}
