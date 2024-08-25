import React from "react";
import { Outlet } from "react-router-dom";
import FacultyNavbar from "./FacultyNavbar";
import Topbar from "./Topbar";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <FacultyNavbar />
      <div style={{ flex: 1, marginLeft: "300px", marginTop: "50px" }}>
        <Topbar />

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
