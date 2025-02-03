import React, { useContext, useState } from "react";
import { createContext } from "react";
import { CheckAdmin } from "./ContextCheckAdmin";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const AdminContext = createContext();

const ContextAdmin = ({ children }) => {
  const navigate = useNavigate();
  const { apiClient } = useContext(CheckAdmin);

  const [showBars, setshowBars] = useState(false);
  const toogleBars = () => {
    setshowBars(!showBars);
  };

  const [loadingAdmin, setloadingAdmin] = useState(true);
  const [data, setdata] = useState();
  const getdata = async () => {
    setloadingAdmin(true);
    try {
      const response = await apiClient.get(`/user/`);
      setdata(response.data);
    } catch (error) {
      setdata();
      if (error.response.status === 404) {
        toast.error("User not found");
        navigate("/login");
      }
    } finally {
      setloadingAdmin(false);
    }
  };

  // login start
  const [loginLoading, setloginLoading] = useState(false);
  const loginFunc = async (data) => {
    setloginLoading(true);
    try {
      const response = await apiClient.post("/user/login", data);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      setloginLoading(false);
    }
  };

  const [registerLoading, setregisterLoading] = useState(false);
  const registerFunc = async (data) => {
    setregisterLoading(true);
    try {
      const response = await apiClient.post("/user/register", data);
      toast.success("Registered successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      setregisterLoading(false);
    }
  };

  const logout = async () => {
    try {
      const response = await apiClient.post(`/user/logout`);
      toast.success("Logged out successfully!");
      navigate("/Login");
      setloadingAdmin(true);
      setdata();
    } catch (error) {
      toast.error("Failed to log out!");
    }
  };

  const updatePortfolio = async (data) => {
    setloadingAdmin(true);
    try {
      const response = await apiClient.put("/portfolio", data);
      setdata(response.data);
      toast.success("Portfolio updated successfully!");
    } catch (error) {
      toast.error("Failed to update portfolio!");
    } finally {
      setloadingAdmin(false);
    }
  };

  const deleteAccount = async () => {
    setloadingAdmin(true);
    try {
      const response = await apiClient.delete("/user/delete");
      toast.success("Account deleted successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Failed to delete account!");
      setloadingAdmin(false);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        toogleBars,
        showBars,
        getdata,
        data,
        loadingAdmin,
        loginFunc,
        loginLoading,
        registerFunc,
        registerLoading,
        logout,
        deleteAccount,
        // update portfolio
        updatePortfolio,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default ContextAdmin;
