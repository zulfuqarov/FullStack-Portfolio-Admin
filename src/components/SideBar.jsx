import React from "react";
import { Link } from "react-router-dom";
import { FaAddressCard, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { FiPhone, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="h-full pt-[10px] relative max-[991px]:fixed max-[991px]:z-50 top-0 max-[991px]:hidden">
      <div className="h-full ">
        <div className="sidebar p-2 w-[300px] overflow-y-auto text-center h-full bg-[#2C2C2C]">
          <Link
            to="/About"
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-teal-600 text-white"
          >
            <FaAddressCard size={20} className="text-white" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Portfolio About
            </span>
          </Link>
          <Link
            to="/Experience"
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-teal-600 text-white"
          >
            <FaBriefcase size={20} className="text-white" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Portfolio Experience
            </span>
          </Link>
          <Link
            to="/Projects"
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-teal-600 text-white"
          >
            <FaProjectDiagram size={20} className="text-white" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Portfolio Projects
            </span>
          </Link>
          <Link
            to="/Contact"
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-teal-600 text-white"
          >
            <FiPhone size={20} className="text-white" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Portfolio Contact
            </span>
          </Link>
          <button className="p-2.5 w-full mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-teal-600 text-white">
            <FiLogOut size={20} className="text-white" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
