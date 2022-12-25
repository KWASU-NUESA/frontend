import { DeleteIcon } from '@chakra-ui/icons';
import {
    Box,
    Text,
    Flex,
    Center,
    HStack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SingleMaterial({text}) {
    const deleteFile = () => {

    }
    return (
      <Center py={1}>
        <Box
          w="xs"
          rounded={'sm'}
          my={0}
          mx={[0, 0]}
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
              <DeleteIcon onClick={deleteFile} />
            </Flex>
          </HStack>
        </Box>
      </Center>
    );
  }