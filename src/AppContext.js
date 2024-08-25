// AppContext.js
import React, { createContext, useContext, useState } from "react";

// Create a context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  // State to store submitted data
  const [submittedData, setSubmittedData] = useState([]);

  // Function to add a new request to the submittedData state
  const addRequest = (newData) => {
    console.log("Before Adding Request:", submittedData); // Log before update
    setSubmittedData((prevData) => {
      const updatedData = [...prevData, { ...newData, status: "Pending" }]; // Add new data to the previous data
      console.log("After Adding Request:", updatedData); // Log after update
      return updatedData;
    });
  };

  // Provide the state and the addRequest function to child components
  return (
    <AppContext.Provider value={{ submittedData, addRequest }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};
