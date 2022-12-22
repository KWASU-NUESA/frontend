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

function AddCourse({AddNewCourse, cuz, setCuz}) {
    const [courseName, setCourseName] = useState("")
    const [courseCode, setCourseCode] = useState("")
    const [dept, setDept] = useState("general")
    const [lv, setLv] = useState(100)
    const [sem, setSem] = useState("Harmattan")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const addCourse = async() => {
        const body = JSON.stringify({
            courseCode,
            courseName,
            level: lv,
            semester: sem,
            department: dept
        })
        const res = await AddNewCourse(body)
        setCuz(prev => prev.concat(res))
        setCourseCode("")
        setCourseName("")
    }
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Add Course
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add new course</DrawerHeader>
  
            <DrawerBody>

            <label className='mt-5'><b>Course Name:</b></label>
            <input type="text" className='form-control' value={courseName} onChange={e=>setCourseName(e.target.value)} /><br />

            <label><b>Course Code:</b></label>
            <input type="text" className='form-control' value={courseCode} onChange={e=>setCourseCode(e.target.value)} /><br />

            <label><b>Department:</b></label>
            <select className='form-control' value={dept} onChange={(e)=> setDept(e.target.value)}>
                <option value="General">General</option>
                <option value="Civil And Environmental Engineering">CEE</option>
                <option value="Aeronautic Engineering">AEE</option>
                <option value="Food and Biological Engineering">FAB</option>
                <option value="Material Science and Engineering">MSE</option>
                <option value="Mechanical Engineering">MEE</option>
                <option value="Electrical and Computer Engineering">ECE </option>
            </select><br />

            <label><b>Level:</b></label>
            <select className='form-control' value={lv} onChange={(e)=> setLv(e.target.value)} >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
            </select><br />

            <label><b>Semester:</b></label>
            <select className='form-control'  value={sem} onChange={(e)=> setSem(e.target.value)} >
                <option value="harmattan">Harmattan</option>
                <option value="rain">Rain</option>
                
            </select>&nbsp;&nbsp;
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

  export default AddCourse