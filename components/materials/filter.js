import FilterModal from './filtermodal'

const Filter = ({search, setSearch, dept, setDept, lv, setLv, sem, setSem}) => {
  return (
    <div className='container mt-4'>
      <FilterModal search={search} setSearch={setSearch} dept={dept} setDept={setDept} sem={sem} setSem={setSem} lv={lv} setLv={setLv}  />
    </div>
  )
}

export default Filter