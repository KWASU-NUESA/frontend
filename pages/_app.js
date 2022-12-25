import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/general/Layout'
import {  useEffect } from 'react'
import {UserProvider} from '@auth0/nextjs-auth0/client'
import { PdfProvider } from '../context/PdfState'
import { LayoutProvider } from '../context/layoutState'
import "aos/dist/aos.css"
import Aos from 'aos'


function MyApp({ Component, pageProps }){
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
    Aos.init()
},[])
    return (
      <ChakraProvider>
        <PdfProvider>
          <LayoutProvider>
            <UserProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </UserProvider>
          </LayoutProvider>
        </PdfProvider>
      </ChakraProvider> 
      
    )
}

export default MyApp
