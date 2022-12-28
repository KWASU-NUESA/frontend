import Footer from "./Footer"
import Nav from "./Nav"
import WhatsApp from "./WhatsApp"


const Layout = ({children}) => {
  return (
    <>
    <Nav /> 
      <main>
          {children}
      </main>
    <Footer />
    <WhatsApp />
    </>
  )
}

export default Layout