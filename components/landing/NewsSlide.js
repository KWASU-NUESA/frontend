import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import LandingBlog from "./BlogCard"

const NewsSlide = ({posts}) => {
    const newpost = posts.slice(0,2)
   
  return (
    <div className="mt-5 pt-5">
    <Flex justify={'space-between'} mt={10}>
            <Stack spacing={0} >
          <Heading size={'lg'}>Read latest News</Heading>
          <Text>Read the latest news from the Nigerian Universities Engineering Students Association Kwasu Chapter.</Text>
        </Stack>
        <Stack><Button>Waitlist</Button></Stack>
          </Flex>
    <div className="row">
        {
            newpost.map(post => (
              <div className="col-md-4">
                <LandingBlog article={post} />
              </div>
            ))
        }
    </div>
    </div>
  )
}


export default NewsSlide
