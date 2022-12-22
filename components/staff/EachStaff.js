import {
  Box,
  Heading,
  Text,
  Img,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import { urlFor } from '../../lib/sanity';

export default function EachStaff({staff}) {
  return (
    <Center py={3}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 #a6aebb', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={urlFor(staff.image)}
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              {staff.type}
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'lg'} noOfLines={1}>
            {staff.stage == "Professor"? "Prof" : staff.stage == "Doctor" ? "Dr" : staff.gender === "Male" ? "Mr" : "Mrs"} {staff.fullname}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            Position: {staff.position} <br />
            Email: devsamahd@gmail.com
          </Text>
        </Box>
      </Box>
    </Center>
  );
}