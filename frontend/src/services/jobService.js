const BASE_URL = "http://localhost:8080/api/jobs";

export async function getJobs() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
}

export async function createJob(jobData) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jobData),
  });

  if (!response.ok) {
    throw new Error("Failed to create job");
  }

  return response.json();
}

export async function updateJob(id, jobData) {
  // ✅ THIS LINE IS CRITICAL
  console.log("UPDATE JOB CALLED WITH ID:", id)
  const response = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update job");
  }

  return response.json();
}

export async function deleteJob(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete job");
  }
}
