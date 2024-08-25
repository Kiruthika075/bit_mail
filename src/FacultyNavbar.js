import React from "react";
import "./FacultyNavbar.css";

const FacultyNavbar = () => {
  return (
    <nav className="faculty-navbar">
      <div className="navbar-logo">
        <a href="/">BIT Mailer</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/faculty-dashboard">
            <span className="material-icons">dashboard</span>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/request-mail">
            <span className="material-icons">mail</span>
            Request Mail
          </a>
        </li>
        <li>
          <a href="/status">
            <span className="material-icons">assessment</span>
            Status
          </a>
        </li>
        <li>
          <a href="/notifications">
            <span className="material-icons">notifications</span>
            Notifications
          </a>
        </li>
      </ul>
      <div className="navbar-user">
        <span>Welcome, Faculty</span>
      </div>
    </nav>
  );
};

export default FacultyNavbar;
