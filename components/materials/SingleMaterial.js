import {
  Box,
  Text,
  Flex,
  Center,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import { BsArrowDown } from 'react-icons/bs';

export default function SingleMaterial({text}) {
  const saveFile = ()=> {
    saveAs(`${process.env.NEXT_PUBLIC_API_URI}pdfs/${text}`, text)
  }
  console.log(process.env.NEXT_PUBLIC_API_URI,text)
  return (
    <Center py={1}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black">
        <HStack bg={useColorModeValue('gray.50', 'gray.900')}>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              {text}
            </Text>
            <BsArrowDown onClick={saveFile} />
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}