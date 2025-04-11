import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  const company = "Placeholder Company"; // Replace with actual data from login or context
  const username = "Placeholder User";   // Replace with real username
  const totalMiles = 123;                // Example dummy data
  const totalCredits = 45;               // Example dummy data

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, Employee</h2>
      <p>Company: {company}</p>
      <p>Username: {username}</p>
      <p><strong>Total Miles Saved:</strong> {totalMiles}</p>
      <p><strong>Total Carbon Credits Earned:</strong> {totalCredits}</p>

      <button onClick={() => navigate("/log-travel")}>Log New Travel</button>
      <br /><br />
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default EmployeeDashboard;
