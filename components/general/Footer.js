import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { BiMailSend } from 'react-icons/bi';
  
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        mt={10}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        borderTop={'1px'}
        borderColor="black">
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              
              <Stack direction={'row'} align={'center'} spacing={2}>
                <ListHeader>Community</ListHeader>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  Soon!
                </Tag>
              </Stack>
              <Link href={'#'}>Waitlist</Link>
              <Link href={'#'}>Terms and conditions</Link>
              <Link href={'#'}>Programs</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Organization</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Parent</Link>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Partners</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Legal</ListHeader>
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Law Enforcement</Link>
              <Link href={'#'}>Status</Link>
            </Stack>
            <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <p>We always have News, be the first to hear it. <span className="text-info">Unsubscribe anytime.</span></p>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('black', 'gray.100')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
              <img src="logos.svg" alt="" />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © {new Date().getFullYear()} Powered by <Link href='/' color={useColorModeValue('green.400','green.800')}>NDT</Link>.
          </Text>
        </Box>
      </Box>
    );
  }