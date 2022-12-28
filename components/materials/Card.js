import { Heading } from "@chakra-ui/react";

import { useState } from 'react';
import {
  Box,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import Link from "next/link";

export default function Card({course}) {
  const {courseCode, courseName, level, semester, department, _id} = course
  const [liked, setLiked] = useState(false);

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg={useColorModeValue('gray.100','gray.900')}
        border={'1px'}
        boxShadow={useColorModeValue('6px 6px 0 #a6aebb', '6px 6px 0 cyan')}>
        
        <Box p={4}>
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              {courseCode}
            </Text>
          </Box>
          <Heading fontSize={'xl'} noOfLines={2}>
            {courseName}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            {`${semester} semester course for ${department.toLowerCase() === 'general' ? 'all' : department} ${level} level student.`}
          </Text>
        </Box>
        <HStack borderTop={'1px'}>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full"><Link href={`/${_id}`}>
            <Text fontSize={'md'} fontWeight={'semibold'}>
              Materials
            </Text></Link>
            <Link href={`/${_id}`}><BsArrowUpRight /></Link>
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}
