import { createContext, useState } from "react";

const PdfContext = createContext({})

export const PdfProvider = ({children, mat}) => {
    const [courses, setCourses] = useState({})
    return (
    <PdfContext.Provider value={{mat, courses, setCourses}}>
        {children}
    </PdfContext.Provider>
    )
}

export default PdfContext

export const getStaticProp = async() => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URI+'pdf', {
    headers:{
      token: process.env.NEXT_PUBLIC_TOKEN
    }
  })
  const mat = await res.json()
  return {
    props: {
      mat
    }
  }
}