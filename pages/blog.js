import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Wrap,
  WrapItem,
  Container,
} from '@chakra-ui/react';
import BlogCard from '../components/blog/BlogCard';
import { sanityClient, urlFor } from '../lib/sanity';
import Header from "../components/blog/Header"

const postQuery = '*[_type == "post"]{..., author->{name, image}, categories[]->}'


export const BlogTags = ({tags}) => {
  return (
    <>
      {tags.map((tag) => {
        return (
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}
            key={tag.title}
            marginRight={2}
            >
            <Text fontSize={'xs'} fontWeight="medium">
              {tag.title}
            </Text>
          </Box>
        );
      })}
    </>
  );
};


export const BlogAuthor= ({img, name, date, color}) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="30px"
        src={urlFor(img)}
        alt={`Avatar of ${name}`}
      />
      <Text fontWeight="medium" color={color || "black"}>{name}</Text>
      <Text color={"grey"}>{date}</Text>
    </HStack>
  );
};

const Blog = ({posts}) => {
  return (
    <Container maxW={'7xl'} p="12">
      <Header />
      
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            {posts.map(article => (
              <BlogCard Author={BlogAuthor} article={article} key={article._id}/>
            ))}
            
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default Blog;

export const getStaticProps = async() => {
  const posts = await sanityClient.fetch(postQuery)
  return {props: {posts}}
}