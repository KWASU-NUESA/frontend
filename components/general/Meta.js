import Head from 'next/head'
import React from 'react'

const Meta = ({title, description, keywords}) => {
  return (
    <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/x-icon" href="./nuesalogo.svg"></link>
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: 'NUESA KWASU',
    description: 'Official website of NUESA KWASU Chapter',
    keywords: 'portal, nuesa, kwasu, engineering'
}

export default Meta