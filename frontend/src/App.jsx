import JobForm from "./components/JobForm";
import JobList from "./components/JobList"; 
import{useState} from "react";
function App(){
  const[jobs,setJobs]=useState([]);
  const addJob =(jobData)=>
  {
    setJobs([...jobs,jobData]);
  }
  console.log(jobs);
  return (
    <div>
      <h1>Job Tracker</h1>
      <p>My first React app!</p>
      <JobForm addJob={addJob}/>
      <JobList jobs={jobs}/>
    </div> 
  );
}
export default App; 