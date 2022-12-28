import Meta from '../components/general/Meta'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    FormControl,
    Input,
    useColorModeValue,
    Flex
  } from '@chakra-ui/react';
  import { useState } from 'react';
  
function Header() {
      const [email, setEmail] = useState("")
      const [state, setState] = useState("")
      const [error, setError] = useState("")
    return (
      <>
        <Meta title="NUESA KWASU | Blog" />
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
              Join the NUESA KWASU<br />
              <Text as={'span'} color={'green.400'}>
                Community Today
              </Text>
            </Heading>
            <Text color={'gray.500'}>
            Join a Community of creative and intelligent minds. Share resources, gain connections, Show your creative side and lots more on the NUESA KWASU Community Platform.
            </Text>
            <Flex
        align={'center'}
        justify={'center'}
        >
        <Container
          maxW={'lg'}
          bg={useColorModeValue('white', 'whiteAlpha.100')}
          boxShadow={'xl'}
          rounded={'lg'}
          p={6}
          direction={'column'}>
          <Heading
            as={'h2'}
            fontSize={{ base: 'xl', sm: '2xl' }}
            textAlign={'center'}
            mb={5}>
            Join the Waitlist
          </Heading>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            as={'form'}
            spacing={'12px'}
            >
            <FormControl>
              <Input
                variant={'solid'}
                borderWidth={1}
                color={'gray.800'}
                _placeholder={{
                  color: 'gray.400',
                }}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                id={'email'}
                type={'email'}
                required
                placeholder={'Your Email'}
                aria-label={'Your Email'}
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </FormControl>
            <FormControl w={{ base: '100%', md: '40%' }} color="white">
              <Button
                color="white"
                disabled="true"
                bg={state === 'success' ? 'green' : 'green.700'}
                isLoading={state === 'submitting'}
                w="100%"
                type={state === 'success' ? 'button' : 'submit'}>
                {state === 'success' ? <CheckIcon /> : 'Submit'}
              </Button>
            </FormControl>
          </Stack>
          <Text
            mt={2}
            textAlign={'center'}
            color={error ? 'red.500' : 'gray.500'}>
            {error
              ? 'Oh no an error occured! 😢 Please try again later.'
              : "Be amongst the first to access it."}
          </Text>
        </Container>
      </Flex>
          </Stack>
        </Container>
      </>
    );
  }
  

const community = () => {
  return (
    <>
    <Meta title={'NUESA KWASU | Community'} />
    <Header />
    </>
  )
}

export default community