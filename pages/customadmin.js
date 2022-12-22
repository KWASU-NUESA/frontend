import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client"
import { useColorModeValue } from "@chakra-ui/react"
import { useContext } from "react"
import { useState, useEffect } from "react"
import AdmFilter from "../components/customadmin/AdmFilter"
import LayoutContext from "../context/layoutState"


const customadmin = ({courses}) => {
  const [cuz, setCuz] = useState(courses)
  const {user, isLoading} = useUser()
  const {setLay} = useContext(LayoutContext)
  const [dept, setDept] = useState("")
    const [sem, setSem] = useState("")
    const [lv, setLv] = useState("")
    const [search, setSearch] = useState("")
    const FilteredCourses = cuz.filter(course => ((course.department === "" ? "" : course.department).toLowerCase()).includes(dept.toLowerCase()) && ((course.semester).toLowerCase()).includes(sem.toLowerCase()) && ((course.level).toString()).includes(lv.toString()) && ((course.courseName).toLowerCase()).includes(search.toString()))
    
  const AddNewPdf = async(body) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URI+'pdf', {
    headers:{
      token: process.env.NEXT_PUBLIC_TOKEN,
      "Content-Type":"application/json"
    },
    body,
    method: 'POST'
  })
  const mat = await res.json()
  return mat
  }
  useEffect(()=>{
    setLay(false)
  })

  
  return (
    <div>
      <div className="container pt-5">
      <AdmFilter AddNewCourse={AddNewPdf} cuz={cuz} setCuz={setCuz} dept={dept} setDept={setDept} sem={sem} setSem={setSem} lv={lv} setLv={setLv} search={search} setSearch={setSearch} />

        <table className="table" style={{"color": useColorModeValue('black', 'white')}}>
          <thead>
            <tr>
              <td>S/N</td>
              <td>Course Code</td>
              <td>Course Name</td>
              <td>Department</td>
              <td>Semester</td>
              <td>Level</td>
              <td>No. of PQ</td>
              <td>No. of Texts</td>
            </tr>
          </thead>
          <tbody>
            {
              FilteredCourses.map(({courseCode, courseName, questions, textbooks, department, semester, level}, key) => 
                <tr key={key}>
                  <td>{key+1}</td>
                  <td>{courseCode}</td>
                  <td>{courseName}</td>
                  <td>{department}</td>
                  <td>{semester}</td>
                  <td>{level}</td>
                  <td>{questions.length}</td>
                  <td>{textbooks.length}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default withPageAuthRequired(customadmin)

export const getServerSideProps = async() => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URI+'pdf', {
    headers:{
      token: process.env.NEXT_PUBLIC_TOKEN
    }
  })
  const courses = await res.json()
  return {
    props: {
      courses
    }
  }
}