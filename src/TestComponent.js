// TestComponent.js
import React, { useState } from "react";
import { useAppContext } from "./AppContext";

const TestComponent = () => {
  const { addRequest, submittedData } = useAppContext();
  const [input, setInput] = useState("");

  const handleAddData = () => {
    addRequest({
      batch: "2022-2026",
      department: "CSE",
      mailContent: "Test mail",
      additionalFields: input,
      status: "Pending",
    });
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddData}>Add Data</button>
      <div>
        <h3>Data in Context:</h3>
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TestComponent;
