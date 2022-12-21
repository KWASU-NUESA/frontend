const AdmFilter = ({dept, setDept, lv, setLv, sem, setSem, search, setSearch}) => {
    
    
    
  return (
    <div className='row'>
        <div className="col-md-6">
            <input type="text" className="form-control" width={45} value={search} onChange={e=> setSearch(e.target.value)} />
        </div>
        <div className="col-md-6 d-flex">
            <select className='form-control' value={dept} onChange={(e)=> setDept(e.target.value)} style={{"width":"5rem"}}>
                <option value="">Dept</option>
                <option value="Civil And Environmental Engineering">CEE</option>
                <option value="Aeronautic Engineering">AEE</option>
                <option value="Food and Biological Engineering">FAB</option>
                <option value="Material Science and Engineering">MSE</option>
                <option value="Mechanical Engineering">MEE</option>
                <option value="Electrical and Computer Engineering">ECE </option>
            </select>&nbsp;&nbsp;
            <select className='form-control' style={{"width":"5rem"}} value={lv} onChange={(e)=> setLv(e.target.value)} >
                <option value="">level</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
            </select>&nbsp;&nbsp;
            <select className='form-control' style={{"width":"5rem"}} value={sem} onChange={(e)=> setSem(e.target.value)} >
                <option value="">semester</option>
                <option value="harmattan">Harmattan</option>
                <option value="rain">Rain</option>
                
            </select>&nbsp;&nbsp;
        </div>
    </div>
  )
}

export default AdmFilter