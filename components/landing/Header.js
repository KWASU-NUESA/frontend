import {
    Container,
    Stack,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function LandingHeader() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 18 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'green.500',
                  zIndex: -1,
                  borderRadius:'50px'
                }}>
                Hello NUESite,
              </Text>
              <br />
              <Text as={'span'} color={'green.400'}>
                Welcome to your digital garden.
              </Text>
            </Heading>
            <Text color={useColorModeValue('gray.500','gray.200') } fontFamily={'cursive'}>
            Dear NUESite, at NUESA KWASU, our intention is nothing but greatness. Hence, we have built a website to get you closer to human and material resources you will be needing to enhance your success at the faculty.
            </Text> 
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
              color={'white'}
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'green'}
                bg={'green.800'}
                _hover={{ bg: 'green.500' }}>
                Contact us
              </Button>
              <Button
              color={'green.500'}
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                bg={'inherit'}
                border={'1px solid'}
                borderColor={'green.500'}
                _hover={{ bg: 'green.500',color: 'white' }}>
                 Community
              </Button>
              
            </Stack>
          </Stack>
          <Flex
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={''}>
            
              
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'headerimg.svg'
                }
              />
          </Flex>
        </Stack>
      </Container>
    );
  }