import JobCard from "./JobCard";
function JobList({jobs,deleteJob}){
    return(
        <div>
            <h2>Job List</h2>
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} deleteJob={deleteJob}/>
            ))}
        </div>
    );
}
export default JobList;