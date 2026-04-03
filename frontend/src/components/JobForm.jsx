import { useState } from "react"; 
function JobForm({addJob}){
    const[company, setCompany] = useState("");
    const[role,setRole]=useState("");
    const[status,setStatus]=useState("Applied");
    const handleSubmit =(e)=>{
        e.preventDefault();
        const jobData = {company,role,status};
        addJob(jobData);
        setCompany("");
        setRole("");
        setStatus("Applied");
    }
    return(
        <div className="job-form">
        <h2> Add Job</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Company</label>
                <input 
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Role</label>
                <input 
                    type="text"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </div>
            <div className="form-group">
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                    <option></option>
                </select>
            </div>
            <button type ="submit" className="btn btn-primary">Add Job</button>
            
        </form>
        </div>
    );
}
export default JobForm;