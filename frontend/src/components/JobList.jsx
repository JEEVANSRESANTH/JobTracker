function JobList({jobs}){
    return(
        <div>
            <h2>Job List</h2>
            {jobs.map((job,index) => (
                <div key={index}>
                    <p>Company :{job.company}</p>
                    <p>Role :{job.role}</p>
                    <p>Status :{job.status}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}
export default JobList;