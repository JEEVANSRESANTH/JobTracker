import { useState } from "react";

function JobCard({ job, deleteJob, startEditing, saveJob, editingJobId }) {
  const isEditing = job.id === editingJobId;
  const [editedCompany, setEditedCompany] = useState(job.company);
  const [editedRole,setEditedRole]=useState(job.role);
  const [editedStatus,setEditedStatus]=useState(job.status);

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editedCompany}
          onChange={(e) => setEditedCompany(e.target.value)}
        />
      ) : (
        <p>Company : {job.company}</p>
      )}

      {isEditing ?(
        <input
          type ="text"
          value={editedRole}
          onChange={(e)=> setEditedRole(e.target.value)}
          />
      ):(
        <p>Role : {job.role}</p>
      )
    }
      {isEditing ?(
        <select
          value={editedStatus}
          onChange={(e)=> setEditedStatus(e.target.value)}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
        </select>
      ):(
      <p>Status : {job.status}</p>
      )}

      <button onClick={() => deleteJob(job.id)}>Delete</button>

      {isEditing ? (
        <button onClick={() => saveJob(job.id, editedCompany,editedRole,editedStatus  )}>
          Save
        </button>
      ):(<button onClick={()=> startEditing(job.id)}>Edit</button>)
      }

      <hr />
    </div>
  );
}

export default JobCard;