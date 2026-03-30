import JobForm from "./components/JobForm";
import JobList from "./components/JobList"; 
import{useState} from "react";
function App(){
  const[jobs,setJobs]=useState([]);
  const addJob =(jobData)=>
  {
    const newJob={
      id:Date.now(),
      ...jobData
    };
    setJobs([...jobs,newJob]);
  }
  const deleteJob=(id)=>{
    console.log("Deleting job",id);
    setJobs(jobs.filter((job)=>job.id != id));
  };
  
  console.log(jobs);
  return (
    <div>
      <h1>Job Tracker</h1>
      <p>My first React app!</p>
      <JobForm addJob={addJob}/>
      <JobList jobs={jobs} deleteJob={deleteJob}/>
    </div> 
  );
}
export default App; 