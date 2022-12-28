import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';
import Meta from '../components/general/Meta';

const avatars = [
  {
    name: 'Dev Samahd',
    url: '/me.png',
  },
  {
    name: 'Abeedah Alabi',
    url: 'https://linkedin.com/',
  },
  {
    name: 'David Olowu',
    url: '/olowu.png',
  }
];

export default function JoinOurTeam() {
  return (
    <Box position={'relative'}>
      <Meta title={'NUESA KWASU | NDT'} />
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 30 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            The NUESA DEV TEAM{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, green.400,green.400)"
              bgClip="text">
              NDT
            </Text>{' '}
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, green.400,green.800)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={useColorModeValue('gray.100','gray.900')}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Join our team!
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              We’re looking for amazing engineers and farmers😅 just like you! Become a part
              of our rockstar engineering and designs team and skyrocket your career!
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Codename 😉"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="doe@gmail.com"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="+234"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              disabled={true}
              bgGradient="linear(to-r, green.400,green.800)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, green.800,green.400)',
                boxShadow: 'xl',
              }}>
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}
