import { Tabs, TabList, TabPanels, Tab, TabPanel, Alert, AlertDescription, AlertIcon } from '@chakra-ui/react'
import SingleMaterial from '../components/materials/SingleMaterial'

const course = ({course}) => {
    const {questions, textbooks} = course
  return (
    <div className='container mt-5'>
        <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
                <Tab><b>Reading Text</b></Tab>
                <Tab><b>Past Questions</b></Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <div className="row">
                        {
                        textbooks.length <= 0 ? 
                        <Alert status='info'>
                            <AlertIcon />
                            <AlertDescription>No Reading texts. The sadness!</AlertDescription>
                        </Alert>
                         : <>{textbooks.map((text, key) =>(<div className="col-md-4" key={key}>
                         <SingleMaterial text={text} />
                        </div>))}</>
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                <div className="row">
                        {
                        questions.length <= 0 ? 
                        <Alert status='info'>
                            <AlertIcon />
                            <AlertDescription>No Past Questions. The sadness!</AlertDescription>
                        </Alert>
                         : <>{questions.map ((text, key) =><div className="col-md-4" key={key}>
                             <SingleMaterial text={text} /> 
                            </div>)}</>
                        }
                    </div>
                </TabPanel>
            </TabPanels>

        </Tabs>
    </div>

  )
}


    export const getStaticProps = async(context) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URI+`pdf/${context.params.courseid}`, {
        headers:{
          token: process.env.NEXT_PUBLIC_TOKEN
        }
      })
      const course = await res.json()
      return {
        props: {
          course
        }
      }
}

export const getStaticPaths = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URI+'pdf', {
        headers:{
          token: process.env.NEXT_PUBLIC_TOKEN
        }
      })
      const pdfs = await res.json()
      const paths = pdfs.map(course => ({params:{courseid: (course._id).toString()}}))
      return {
        paths,
        fallback:false
      }
}

export default course