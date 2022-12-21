import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/general/Layout'
import {  useEffect } from 'react'
import {UserProvider} from '@auth0/nextjs-auth0/client'
import { PdfProvider } from '../context/PdfState'


function MyApp({ Component, pageProps }){
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
    return (
      <ChakraProvider>
        <PdfProvider>
            <UserProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </UserProvider>
        </PdfProvider>
      </ChakraProvider> 
      
    )
}

export default MyApp
