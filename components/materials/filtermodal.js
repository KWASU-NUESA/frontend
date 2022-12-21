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

function FilterModal({search, setSearch, dept, setDept, lv, setLv, sem, setSem}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const reset = () => {
        setDept("")
        setLv("")
        setSearch("")
        setSem("")
    }
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Filter or Search
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
            <DrawerHeader>Filter or search for courses</DrawerHeader>
  
            <DrawerBody>
            <input placeholder="Search for a course..." m={5} value={search} onChange={(e)=>setSearch(e.target.value)} className="form-control" />
            <label className='mt-5'><b>Filter By Department:</b></label>
            <select className='form-control' value={dept} onChange={(e)=> setDept(e.target.value)}>
                <option value="">All</option>
                <option value="Civil And Environmental Engineering">CEE</option>
                <option value="Aeronautic Engineering">AEE</option>
                <option value="Food and Biological Engineering">FAB</option>
                <option value="Material Science and Engineering">MSE</option>
                <option value="Mechanical Engineering">MEE</option>
                <option value="Electrical and Computer Engineering">ECE </option>
            </select><br />

            <label><b>Filter By Level:</b></label>
            <select className='form-control' value={lv} onChange={(e)=> setLv(e.target.value)} >
                <option value="">All</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
            </select><br />

            <label><b>Filter By Semester:</b></label>
            <select className='form-control'  value={sem} onChange={(e)=> setSem(e.target.value)} >
                <option value="">All</option>
                <option value="harmattan">Harmattan</option>
                <option value="rain">Rain</option>
                
            </select>&nbsp;&nbsp;
            </DrawerBody>
  
            <DrawerFooter>
              <Button bg={'green'} mr={3} onClick={reset}>
                Reset
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

  export default FilterModal