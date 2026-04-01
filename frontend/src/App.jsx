import JobForm from "./components/JobForm";
import JobList from "./components/JobList"; 
import{useState} from "react";
function App(){
  const[jobs,setJobs]=useState([]);
  const[filterStatus,setFilterStatus]=useState("All");
  const[editingJobId,setEditingJobId]=useState(null);
  const filteredJobs= filterStatus==="All" ? jobs:jobs.filter((job)=>job.status===filterStatus);
  const startEditing=(id)=>{
    setEditingJobId(id);
  }
  const saveJob=(id,updatedCompany,updatedRole,updatedStatus)=>{
    setJobs(
      jobs.map((job)=>
        job.id === id ?{...job,
          company:updatedCompany,
          role:updatedRole,
          status:updatedStatus,
          }:job)
    );
    setEditingJobId(null);
  }
  const addJob =(jobData)=>
  {
    const newJob={
      id:Date.now(),
      ...jobData
    };
    setJobs([...jobs,newJob]);
  }
  const deleteJob=(id)=>{
    setJobs(jobs.filter((job)=>job.id !== id));
  };
  
  console.log(jobs);
  return (
    <div>
    <label>
      Filter by Status :{" "}
      <select value={filterStatus}
        onChange={(e)=> setFilterStatus(e.target.value)}>
          <option value="All"> All</option>
          <option value="Applied"> Applied</option>
          <option value="Interview"> Interview</option>
          <option value="Rejected"> Rejected</option>
      </select>
    </label>
    
      <h1>Job Tracker</h1>
      <p>My first React app!</p>
      <JobForm addJob={addJob}/>
      <JobList jobs={filteredJobs}
      deleteJob={deleteJob}
      startEditing={startEditing}
      saveJob={saveJob}
      editingJobId={editingJobId}/>
    </div> 
  );
}
export default App; 