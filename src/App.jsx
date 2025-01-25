import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logo from "./components/Logo";
import AdminWelcome from "./components/AdminWelcome";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ContextAdmin from "./context/ContextAdmin";

const App = () => {
  return (
    <div className="h-screen flex flex-col ">
      <ContextAdmin>
        <Logo />
        <div className="pt-[80px]">
          <Routes>
            <Route path="/" element={<Admin />}>
              <Route index element={<AdminWelcome />} />
              <Route path="About" element={<About />} />
              <Route path="Experience" element={<Experience />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="Contact" element={<Contact />} />
            </Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </ContextAdmin>
    </div>
  );
};

export default App;
