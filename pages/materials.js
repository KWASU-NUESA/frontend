
import Meta from '../components/general/Meta'
import MatHeader from '../components/materials/Header'
import Pdfs from '../components/materials/Pdfs'

const Materials = ({mat}) => {
  return (
    <div>
      <MatHeader />
      <Meta title="Engineering Materials" />
      <Pdfs courses={mat} />
    </div>
  )
}

export default Materials

export const getStaticProps = async() => {
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