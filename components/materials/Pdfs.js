import { Alert, AlertIcon } from "@chakra-ui/react"
import { useState } from "react"
import Card from "./Card"
import Filter from "./filter"
const Pdfs = ({courses}) => {
  
  const [dept, setDept] = useState("")
  const [sem, setSem] = useState("")
  const [lv, setLv] = useState("")
  const [search, setSearch] = useState('')
    const FilteredCourses = courses.filter(course => ((course.department).toLowerCase()).includes(dept.toLowerCase()) && ((course.semester).toLowerCase()).includes(sem.toLowerCase()) && ((course.level).toString()).includes(lv.toString()) && ((course.courseName).toLowerCase()).includes(search.toString()))
    
  return (
    <div id="main">
      <Filter search={search} setSearch={setSearch} dept={dept} setDept={setDept} sem={sem} setSem={setSem} lv={lv} setLv={setLv} />
      <div className="container">
        {FilteredCourses.length <= 0 && search && <div className="mt-5">
          <Alert status='warning'>
            <AlertIcon />
            Oops there was no match, sorry!
          </Alert>
        </div>
        }
        {FilteredCourses.length <= 0 && !search && <div className="mt-5">
          <Alert status='info'>
            <AlertIcon />
            No materials to display
          </Alert>
        </div>
        }
        <div className="row">
          {FilteredCourses.map((data) => {
            return (
              <div className="col-md-4" key={data._id}>
                <Card
                  course={data}
                />
              </div>
              
            );
          })}
        </div>
        
      </div>
          
    </div>
  )
}
export default Pdfs