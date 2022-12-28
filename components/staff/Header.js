import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';

export default function StaHeader() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Get to know the staff<br />
            <Text as={'span'} color={'aqua'}>
              at FET Kwasu.
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Download all engineering materials(past questions and reading texts) for all departments
            at the Faculty of Engineering and Technology, KWASU and all levels. Proudly sponsored by NUESA KWASU Chapter.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
