import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { AdminContext } from "../context/ContextAdmin";

const Logo = () => {
  const { toogleBars, showBars, data } = useContext(AdminContext);

  return (
    <div className="flex p-6 fixed w-full top-0 left-0 bg-white z-50 shadow-md ">
      <Link
        to={`http://localhost:5173/${
          data
            ? data.getportfolio
              ? data.getportfolio
              : ""
            : ""
        }`}
        className="flex items-center text-4xl font-extrabold text-teal-600 hover:text-teal-800 transition duration-300"
        target="_blank"
      >
        <span className="text-teal-600">get</span>
        <span className="text-teal-400 ml-1">portfolio</span>
      </Link>

      <button
        onClick={toogleBars}
        className="hidden max-[991px]:block text-3xl text-teal-600 ml-auto cursor-pointer "
      >
        {showBars ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Logo;
