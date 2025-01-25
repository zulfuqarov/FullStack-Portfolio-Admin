import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

const Admin = () => {
  return (
    <div className="h-full w-full flex ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Admin;
