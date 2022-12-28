import { Box } from '@chakra-ui/react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsApp = () => {
  return (
    <Box
    borderRadius={'15'}
    p={3}
    bg={'green'}
    position={'fixed'}
    bottom={10}
    right={10}
    fontSize={30}
    data-aos="zoom-in"
    color={'white'}
    _hover={{ bg: 'green.800'}}
    >
        <BsWhatsapp />
    </Box>
  )
}

export default WhatsApp