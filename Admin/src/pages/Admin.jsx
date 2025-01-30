import React, { useContext, useEffect } from "react";
import { data, Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import { AdminContext } from "../context/ContextAdmin";

const Admin = () => {
  const { getdata, loadingAdmin, data } = useContext(AdminContext);
  useEffect(() => {
    getdata();
  }, []);

  if (loadingAdmin) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (data) {
    return (
      <div className="h-screen pt-[80px]  w-full flex">
        <Sidebar />
        <Outlet />
      </div>
    );
  }
};

export default Admin;
