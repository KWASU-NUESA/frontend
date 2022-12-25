import { PortableText } from "@portabletext/react"
import { sanityClient } from "../../lib/sanity"
import {urlFor} from '../../lib/sanity'


const SampleImageComponent = ({value}) => {
  return (
    <img
    
      src={
        urlFor(value)}
      alt={value.alt || ' '}
    />
  )
}

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
}
const postQuery = '*[_type == "post" && slug.current == $slug][0]'

const course = ({post}) => {
    console.log(post)
  return (
    <div className='container mt-5'>
        
        <PortableText value={post.body} components={components} />
    </div>
  )
}



export const getStaticProps = async({params}) => {
  const {slug} = params
    const post = await sanityClient.fetch(postQuery,{slug})
    
    return {props: {post}} 
}

export const getStaticPaths = async () => {
    const paths = await sanityClient.fetch('*[_type == "post" && defined(slug.current)]{"params":{"slug":slug.current}}')
    return {
        paths,
        fallback:true
    }
}

export default course