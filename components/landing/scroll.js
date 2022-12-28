import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Scroll = () => {
  return (
    <>
    <div className="theone">

    <div className="m-scroll">
        
        <div className="m-scroll__title">
            <div>
            <h1>
                <Link href="https://kwasu.edu.ng">https://www.Kwasu.edu.nd</Link> <img src="kwasu.svg" alt="ok" height="40px" width="40px" /> &nbsp;
            </h1>
            <h1>
                <Link href="https://kwasu.edu.ng">KWARA STATE UNIVERSITY, MALETE</Link> <img src="kwasu.svg" alt="ok" height="40px" width="40px" /> &nbsp;
            </h1>
            <h1>
                <Link href="https://kwasu.edu.ng">https://www.Kwasu.edu.nd</Link> <img src="kwasu.svg" alt="ok" height="40px" width="40px" /> &nbsp;
            </h1>
            <h1>
                <Link href="https:kwasu.edu.ng">KWARA STATE UNIVERSITY, MALETE</Link> <img src="kwasu.svg" alt="ok" height="40px" width="40px" /> &nbsp;
            </h1>
            <h1>
                <Link href="https://kwasu.edu.ng">https://www.Kwasu.edu.nd</Link> <img src="kwasu.svg" alt="ok" height="40px" width="40px" /> &nbsp;
            </h1>
            </div>
            
        </div>
    </div>
    </div>
        <style jsx>
            {`
            .m-scroll::before, .m-scroll::after {
                background: ${useColorModeValue('linear-gradient(90deg, #ECF1F4 29.04%, rgba(255, 255, 255, 0) 94.26%)','linear-gradient(90deg, #1A202C 18.07%, rgba(57, 57, 60, 0) 75.57%)')};
                content: "";
                height: 100%;
                position: absolute;
                width: 10%;
                z-index: 2;
                }
            `}
        </style>

    </>
  )
}

export default Scroll