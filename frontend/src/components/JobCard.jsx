function JobCard({job,deleteJob}){
    return(
        <div>
            <p>Company : {job.company}</p>
            <p>Role : {job.role}</p>
            <p>Status : {job.status}</p>
            <button onClick={()=> deleteJob(job.id)}> Delete</button>
            <hr/>

        </div>
    );
}
export default JobCard;