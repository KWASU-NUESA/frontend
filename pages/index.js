import { Heading, useColorModeValue, Stack, Button, Text } from '@chakra-ui/react'
import Meta from '../components/general/Meta'
import LandingHeader from '../components/landing/Header'
import NewsSlide from '../components/landing/NewsSlide'
import Scroll from '../components/landing/scroll'

export default function Home() {
  return (
    <>
      <Meta title='NUESA KWASU Chapter' />
      <div className='container'>
        <LandingHeader />
      </div><br /><br />
      <Scroll />
      <div className="container mt-5">
        
        <div className="row justify-center">
          <div className="col-md-5" data-aos="slide-up" >


          <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 0, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
              <br />
              <Text as={'span'}>
                Who are we?
              </Text>
            </Heading>
            <Text color={useColorModeValue('gray.500','gray.200') } fontFamily={'cursive'}>
            We are a body of student engineers ready to help our fellows and ourselves attain greater heights. We are ensuring a safe system for engineering students and getting us closer to resources we need.
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
                _hover={{ bg: 'green.500', color: 'white' }}>
                Community
              </Button>
              
            </Stack>
          </Stack>
        </Stack>


          </div>
          <div className="col-md-7">
            <style jsx>
              {`
              .pycard{
                padding-top: 50px
              }
              .card{
                min-height: 300px;
                border-radius: 20px;
              }
              `}
            </style>
            <div className="row">
              <div className="col-md-6 pycard">
                
                <div className="card" data-aos="slide-up" style={{'background': useColorModeValue('#EDF2F7','#171923'), "border":'0' }}>
                  <div className="card-body">
                    <img src="yellow.svg" alt="" width={'55'} className="mb-3" />
                    <Heading size={'md'} mb={'3'}>We are Perspicuous</Heading>
                    <Text color= {useColorModeValue('gray.600','gray.300')}>We know what you want and what you need. As such, we have designed a promising and clearly expressed path towards archieving that.</Text>
                  </div>
                </div>

                <div className="card mt-4" data-aos="slide-up" style={{'background': useColorModeValue('#EDF2F7','#171923'), "border":'0' }}>
                  <div className="card-body">
                    <img src="aqua.svg" alt="" width={'55'} className="mb-3" />
                    <Heading size={'md'} mb={'3'}>We provide 21st Century Learning</Heading>
                    <Text color= {useColorModeValue('gray.600','gray.300')}>Our mission is to bridge the gap between what the university teaches and what the real world needs as such we provide capabilities for large scale learning.</Text>
                  </div>
                </div>

              </div>
              <div className="col-md-6 mt-4">

                <div className="card" data-aos="slide-up" style={{'background': useColorModeValue('#EDF2F7','#171923'), "border":'0' }}>
                  <div className="card-body">
                    <img src="blue.svg" alt="" width={'55'} className="mb-3" />
                    <Heading size={'md'} mb={'3'}>We nurture Ballers, not Mechanics</Heading>
                    <Text color= {useColorModeValue('gray.600','gray.300')}>The institution like others, teach the same curriculum to every set every year. 
                      NUESA comlements this by empowering the studsents with sustainable skills.</Text>
                  </div>
                </div>

                <div className="card mt-4" data-aos="slide-up" style={{'background': useColorModeValue('#EDF2F7','#171923'), "border":'0' }}>
                  <div className="card-body">
                    <img src="green.svg" alt="" width={'55'} className="mb-3" />
                    <Heading size={'md'} mb={'3'}>We bring forth Limitless Opportunities</Heading>
                    <Text color= {useColorModeValue('gray.600','gray.300')}>They say the sky is the limit. However, at NUESA KWASU, we reach it everyday as we provide endless opportunities to the engineering community.</Text>
                  </div>
                </div>

                </div>
            </div>
          </div>
        </div>
      
        <NewsSlide />
      
        </div>
    </>
  )
}


