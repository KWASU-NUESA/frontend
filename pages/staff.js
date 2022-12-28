import Meta from "../components/general/Meta"
import EachStaff from "../components/staff/EachStaff"
import StaHeader from "../components/staff/Header"
import { sanityClient } from "../lib/sanity"


const staffQuery = '*[_type == "staffData"]{_id, fullname, image, slug, position, email, gender, stage, type}'

const Staff = ({staff}) => {
  const academic = staff.filter(data => (data.type).toLowerCase() === 'academic')
  const nonacademic = staff.filter(data => (data.type).toLowerCase() === 'non academic')
  const executive = staff.filter(data => (data.type).toLowerCase() === 'executive')
  return (
    <>
    <Meta title={'NUESA KWASU | Staff'}/>
    <main className="container">
      <StaHeader />
      <div className="row">
        {academic && academic.map(sta => (
          <div className="col-md-4" key={sta._id}>
            <EachStaff staff={sta} />
          </div>
      ))}
        {nonacademic && nonacademic.map(sta => (
          <div className="col-md-4" key={sta._id}>
            <EachStaff staff={sta} />
          </div>
      ))}
        {executive && executive.map(sta => (
          <div className="col-md-4" key={sta._id}>
            <EachStaff staff={sta} />
          </div>
      ))}
      </div>
      
    </main>
  </>
  )
}

export default Staff

export const getStaticProps = async() => {
  const staff = await sanityClient.fetch(staffQuery)
  return {props: {staff}}
}