import JobCard from "./JobCard";
function JobList({jobs,deleteJob,startEditing,saveJob,editingJobId}){
    return(
        <div className="job-list">
            <h2>Job List</h2>
            {jobs.map((job) => (
                <JobCard key={job.id} 
                job={job} 
                deleteJob={deleteJob} 
                startEditing={startEditing} 
                saveJob={saveJob} 
                editingJobId={editingJobId}/>
            ))}
        </div>
    );
}
export default JobList;