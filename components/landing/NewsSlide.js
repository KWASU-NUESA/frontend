import React from 'react'
import { sanityClient } from '../../lib/sanity'

const postQuery = '*[_type == "post"]{..., author->{name, image}, categories[]->}'
const NewsSlide = ({posts}) => {
    const newpost = posts.slice(0,3)
  return (
    <div>
        {
            newpost.map(post => (
                <BlogCard article={post} />
            ))
        }
    </div>
  )
}

export default NewsSlide

export const getStaticProps = async() => {
    const posts = await sanityClient.fetch(postQuery)
  return {props: {posts}}
}