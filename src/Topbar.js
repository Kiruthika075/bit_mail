import React, { useState } from "react";
import "./Topbar.css";

const TopBar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleProfileClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <div className="topbar">
      <div className="search">
        <span className="material-icons search-icon">search</span>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="topbar-right">
        <div className="profile-container" onClick={handleProfileClick}>
          <img src="/profile.png" alt="Profile" className="profile-pic" />
          {showLogout && (
            <div className="logout-container">
              <a href="/logout" className="logout-button">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
