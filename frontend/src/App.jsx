import JobForm from "./components/JobForm";
import JobList from "./components/JobList"; 
import { getJobs, createJob, updateJob } from "./services/jobService";
import { deleteJob as deleteJobApi } from "./services/jobService";
import{useState,useEffect} from "react";
function App(){
  const[jobs,setJobs]=useState([]);
  const[filterStatus,setFilterStatus]=useState("All");
  const[editingJobId,setEditingJobId]=useState(null);
  const filteredJobs= filterStatus==="All" ? jobs:jobs.filter((job)=>job.status===filterStatus);
  const startEditing=(id)=>{
    setEditingJobId(id);
  }
  useEffect(()=>{
    async function loadJobs(){
      try{
        const data = await getJobs();
        setJobs(data);
      } catch(error){
        console.error(error);
      }
    }
    loadJobs();
  },[]);
  const saveJob = async (id, updatedJobData) => {
  try {
    const updatedJob = await updateJob(id, updatedJobData);

    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? updatedJob : job
      )
    );

    // ✅ THIS IS THE MISSING LINE
    setEditingJobId(null);

  } catch (error) {
    console.error(error);
  }
  };
  const addJob =async(jobData)=>{
    try{
      const createdJob=await createJob(jobData);
      setJobs((prevJobs)=>[...prevJobs,createdJob]);
    }catch(error){
      console.error(error);
    }
  };
  const deleteJob = async (id) => {
  try {
    await deleteJobApi(id);

    setJobs((prevJobs) =>
      prevJobs.filter((job) => job.id !== id)
    );

    // Optional: exit edit mode if the deleted job was being edited
    if (editingJobId === id) {
      setEditingJobId(null);
    }
  } catch (error) {
    console.error(error);
  }
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
     <div className="job-tracker">
      <h1>Job Tracker</h1>
      <p>My first React app!</p>
      <JobForm addJob={addJob}/>
      <JobList jobs={filteredJobs}
      deleteJob={deleteJob}
      startEditing={startEditing}
      saveJob={saveJob}
      editingJobId={editingJobId}/>
     </div>
    </div> 
  );
}
export default App; 