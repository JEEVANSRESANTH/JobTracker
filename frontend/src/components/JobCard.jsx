import { useState } from "react";

function JobCard({ job, deleteJob, startEditing, saveJob, editingJobId }) {
  const isEditing = job.id === editingJobId;
  const [editedCompany, setEditedCompany] = useState(job.company);

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

      <p>Role : {job.role}</p>
      <p>Status : {job.status}</p>

      <button onClick={() => deleteJob(job.id)}>Delete</button>

      {isEditing ? (
        <button onClick={() => saveJob(job.id, editedCompany)}>
          Save
        </button>
      ):(<button onClick={()=> startEditing(job.id)}>Edit</button>)
      }

      <hr />
    </div>
  );
}

export default JobCard;