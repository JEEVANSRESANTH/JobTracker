import { useState } from "react";

function JobForm({ addJob }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Frontend validation
    if (!company.trim()) {
      setError("Company is required");
      return;
    }

    if (company.trim().length < 2) {
      setError("Company must be at least 2 characters");
      return;
    }

    if (!role.trim()) {
      setError("Role is required");
      return;
    }

    if (role.trim().length < 3) {
      setError("Role must be at least 3 characters");
      return;
    }

    if (!status) {
      setError("Status is required");
      return;
    }

    // ✅ Clear error if validation passes
    setError("");

    // ✅ Call backend API
    addJob({
      company,
      role,
      status,
    });

    // ✅ Reset form
    setCompany("");
    setRole("");
    setStatus("");
  };

  return (
    <div className="job-form">
      <h2>Add Job</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select status</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="btn btn-primary">
          Add Job
        </button>
      </form>
    </div>
  );
}

export default JobForm;