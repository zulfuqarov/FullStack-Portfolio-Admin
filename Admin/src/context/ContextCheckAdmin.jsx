import React, { useEffect, useState, createContext } from "react";
export const CheckAdmin = createContext();
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContextCheckAdmin = ({ children }) => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API;

  const apiClient = axios.create({
    baseURL: apiUrl,
  });

  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 403) {
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return (
    <CheckAdmin.Provider
      value={{
        apiClient,
      }}
    >
      {children}
    </CheckAdmin.Provider>
  );
};

export default ContextCheckAdmin;
