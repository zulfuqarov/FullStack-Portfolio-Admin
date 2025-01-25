import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <div className="flex   p-6">
        <Link
          to="http://localhost:5173/"
          className="flex items-center text-4xl font-extrabold text-teal-600 hover:text-teal-800 transition duration-300"
          target="_blank"
        >
          <span className="text-teal-600">get</span>
          <span className="text-teal-400 ml-1">portfolio</span>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
