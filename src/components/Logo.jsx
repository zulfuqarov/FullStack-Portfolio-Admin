import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="flex p-6">
      <Link
        to="http://localhost:5173/"
        className="flex items-center text-4xl font-extrabold text-teal-600 hover:text-teal-800 transition duration-300"
        target="_blank"
      >
        <span className="text-teal-600">get</span>
        <span className="text-teal-400 ml-1">portfolio</span>
      </Link>
    </div>
  );
};

export default Logo;
