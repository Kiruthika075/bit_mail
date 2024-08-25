// StatusPage.js
import React, { useEffect } from "react";
import { useAppContext } from "./AppContext";
import "./StatusPage.css";

const StatusPage = () => {
  const { submittedData } = useAppContext(); // Get submittedData from context

  useEffect(() => {
    console.log("Submitted Data in StatusPage:", submittedData); // Log to check data
  }, [submittedData]);

  return (
    <div className="status-container">
      <h2>Submitted Requests</h2>
      {submittedData.length === 0 ? (
        <p>No data submitted yet.</p>
      ) : (
        <table className="status-table">
          <thead>
            <tr>
              <th>Batch</th>
              <th>Department</th>
              <th>Mail Content</th>
              <th>Additional Fields</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr
                key={index}
                className={data.status ? data.status.toLowerCase() : "unknown"}
              >
                <td>{data.batch}</td>
                <td>{data.department}</td>
                <td>{data.mailContent}</td>
                <td>{data.additionalFields}</td>
                <td>{data.status || "Pending"}</td>{" "}
                {/* Default to 'Pending' if status is undefined */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StatusPage;
