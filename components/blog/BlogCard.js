import { useState } from 'react';
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
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import { BlogAuthor, BlogTags } from '../../pages/blog';
import { urlFor } from '../../lib/sanity';

export default function BlogCard({article}) {
  const [liked, setLiked] = useState(false);

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
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
          <BlogTags tags={["Engineering","Latest"]} />
          <Heading color={'black'} fontSize={'xl'} noOfLines={1}>
            {article.title}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            {article.intro}
          </Text>
          <BlogAuthor name={article.author.name} date={article.publishedAt.split("T")[0]} img={article.author.image} />
        </Box>
        <HStack borderTop={'1px'} color="black">
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