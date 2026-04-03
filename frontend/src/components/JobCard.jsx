import { useState,useEffect,useRef } from "react";

function JobCard({ job, deleteJob, startEditing, saveJob, editingJobId }) {
  const isEditing = job.id === editingJobId;
  const [editedCompany, setEditedCompany] = useState(job.company);
  const [editedRole,setEditedRole]=useState(job.role);
  const [editedStatus,setEditedStatus]=useState(job.status);
  const [confirmDelete,setConfirmDelete]=useState(false);
  const companyInputRef=useRef(null);
  useEffect(()=>{
    if(isEditing && companyInputRef.current){
      companyInputRef.current.focus();
    }
  },[isEditing]);

  return (
    <div className={`job-card ${isEditing ? "editing" : ""}`}>
      {isEditing ? (
        <input
          ref={companyInputRef}
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
          <option value="Rejected">Rejected </option>
        </select>
      ):(
      <p>
        Status:{" "}
        <span
          className={`status status-${job.status.toLowerCase()}`}
        >
          {job.status}
        </span>
      </p>
      )}

      {!isEditing && (
  <>
    {!confirmDelete ? (
      <button
        className="btn btn-danger"
        onClick={() => setConfirmDelete(true)}
      >
        Delete
      </button>
    ) : (
      <div className="confirm-delete">
        <span>Are you sure?</span>

        <button
          className="btn btn-secondary"
          onClick={() => setConfirmDelete(false)}
        >
          Cancel
        </button>

        <button
          className="btn btn-danger"
          onClick={() => deleteJob(job.id)}
        >
          Confirm Delete
        </button>
      </div>
    )}
  </>
)}

      {isEditing ? (
        <button className="btn btn-primary" onClick={() => saveJob(job.id, editedCompany,editedRole,editedStatus  )}>
          Save
        </button>
      ):(<button className="btn btn-secondary" onClick={()=> startEditing(job.id)}>Edit</button>)
      }

      <hr />
    </div>
  );
}

export default JobCard;