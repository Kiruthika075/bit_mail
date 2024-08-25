// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import FacultyDashboard from "./FacultyDashboard";
import RequestMail from "./RequestMail";
import Login from "./Login";
import Notifications from "./Notifications";
import StatusPage from "./StatusPage";
import { AppProvider } from "./AppContext";
import "./App.css";
import TestComponent from "./TestComponent";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
            <Route path="/request-mail" element={<RequestMail />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/test" element={<TestComponent />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
