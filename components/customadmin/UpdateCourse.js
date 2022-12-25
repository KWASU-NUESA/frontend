import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import SingleMaterial from './SinglePdf'

function UpdateCourse({UpdatePdf, id, type, fil, children, setCuz}) {
    const [file, setFile] = useState("")
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const addCourse = async() => {
        const form =new FormData()
        file.forEach(file => {
            form.append('files', file, file.name)
        })
        const res = await UpdatePdf(body)
        setCuz(prev => prev.concat(res))
        setCourseCode("")
        setCourseName("")
    }
  
    return (
      <>
        <button ref={btnRef} onClick={onOpen}>
          {children}
        </button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Edit Course</DrawerHeader>
  
            <DrawerBody>
            <form encType='multipart/form-data'>
            <label className='mt-5'><b>Add {type}:</b></label>
            <input type="file" className='form-control' value={file} onChange={e=>setFile(e.target.files)} multiple/><br />
            </form>
            {fil && fil.map((fil, key) => <SingleMaterial text={fil} key={key} />)}
            </DrawerBody>
  
            <DrawerFooter>
              <Button bg={'green'} mr={3} onClick={addCourse}>
                Add Course
              </Button>
              <Button variant='outline' mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default UpdateCourse