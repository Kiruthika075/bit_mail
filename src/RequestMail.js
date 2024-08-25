// RequestMail.js
import React, { useState } from "react";
import "./RequestMail.css";
import { useAppContext } from "./AppContext";

const RequestMail = () => {
  const { addRequest } = useAppContext(); // Using context to add requests
  const [formData, setFormData] = useState({
    batch: "",
    department: "",
    mailContent: "",
    additionalFields: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update form data based on user input
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    console.log("Form Data Submitted:", formData); // Log the form data to confirm submission

    // Add status field before sending data to context
    const dataWithStatus = {
      ...formData,
      status: "Pending", // Adding a default status field
    };

    addRequest(dataWithStatus); // Add the form data with status to the context

    // Reset form data after submission
    setFormData({
      batch: "",
      department: "",
      mailContent: "",
      additionalFields: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Request Mail to Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="batch">Select Batch:</label>
          <select
            name="batch"
            id="batch"
            value={formData.batch}
            onChange={handleChange}
          >
            <option value="">-- Select Batch --</option>
            <option value="2022-2026">2022-2026</option>
            <option value="2023-2027">2023-2027</option>
            <option value="2021-2025">2021-2025</option>
            <option value="2020-2024">2020-2024</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="department">Select Department:</label>
          <select
            name="department"
            id="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">-- Select Department --</option>
            <option value="CSE">Computer Science Engineering (CSE)</option>
            <option value="ECE">
              Electronics and Communication Engineering (ECE)
            </option>
            <option value="EEE">
              Electrical and Electronics Engineering (EEE)
            </option>
            <option value="MECH">Mechanical Engineering (MECH)</option>
            <option value="CIVIL">Civil Engineering (CIVIL)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mailContent">Mail Content:</label>
          <textarea
            name="mailContent"
            id="mailContent"
            value={formData.mailContent}
            onChange={handleChange}
            placeholder="Enter your mail content here"
          />
        </div>

        <div className="form-group">
          <label htmlFor="additionalFields">Additional Fields:</label>
          <textarea
            name="additionalFields"
            id="additionalFields"
            value={formData.additionalFields}
            onChange={handleChange}
            placeholder="Any additional information"
          />
        </div>

        <button type="submit" className="submit-button">
          Send Request
        </button>
      </form>
    </div>
  );
};

export default RequestMail;
