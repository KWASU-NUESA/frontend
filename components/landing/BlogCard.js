import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  Link,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { BlogAuthor, BlogTags } from '../../pages/blog';
import { urlFor } from '../../lib/sanity';

export default function BlogCard({article}) {

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        borderRadius={15}
        bg={useColorModeValue('gray.100', 'gray.900')}>
        <Box h={'200px'}  borderColor="black">
          <Img
            src={
              urlFor(article.mainImage)
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <BlogTags tags={article.categories} />
          <Heading fontSize={'xl'} noOfLines={1}>
            {article.title}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            {article.intro}
          </Text>
          <BlogAuthor name={article.author.name} date={article.publishedAt.split("T")[0]} img={article.author.image} color={useColorModeValue("black","white")} />
        </Box>
        <HStack>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
              <Link href={`/blog/${article.slug.current}`}>
            <Text fontSize={'md'} fontWeight={'semibold'}>
              Read More
            </Text></Link>
            <Link href={`/blog/${article.slug.current}`}><BsArrowUpRight /></Link>
          </Flex>
          
        </HStack>
      </Box>
    </Center>
  );
}