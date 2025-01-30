import React, { useContext, useState } from "react";
import { createContext } from "react";
import { CheckAdmin } from "./ContextCheckAdmin";
import { useNavigate } from "react-router-dom";

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
      console.log(response.data);
      setdata(response.data);
    } catch (error) {
      console.log(error);
      setdata();
    } finally {
      setloadingAdmin(false);
    }
  };

  // login start
  // const [loginLoading, setloginLoading] = useState(false);
  const loginFunc = async (data) => {
    try {
      // setloginLoading(true);
      const response = await apiClient.post("/user/login", data);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      // setloginLoading(false);
    }
  };

  const registerFunc = async (data) => {
    try {
      const response = await apiClient.post("/user/register", data);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
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
        registerFunc,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default ContextAdmin;
