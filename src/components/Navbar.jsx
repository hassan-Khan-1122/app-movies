
import React, { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className=" border-gray-200 dark:bg-gray-900 shadow-lg bg-[#032541] sticky top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img
              src='https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg'
              className="w-[50px] "
              alt="Logo"
            /> */}
            <span className="self-center text-2xl text-[#ffffff] whitespace-nowrap ">THE MOVIX</span>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleSidebar}
            aria-controls="navbar"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0zM3 10a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0zM3 15a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                to="/"
                  href="#"
                  className="block py-2 pl-3 pr-4   rounded md:bg-transparent text-[#ffffff] text-[20px] font-mono p-[8px]"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rated"
                  className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:dark:hover:bg-transparent text-[#ffffff] text-[20px] font-mono p-[8px]"
                >
                  Rated 
                </NavLink>
              </li>
              <li>
              <NavLink
              to = "/hassan"
                  className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:dark:hover:bg-transparent text-[#ffffff] text-[20px] font-mono p-[8px]"
                >
                  Up comming
                </NavLink>
                
              </li>
              {/* <li>
              <a
                  href="#"
                  className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:dark:hover:bg-transparent text-[#ffffff] text-[20px] font-mono p-[8px]"
                >
                  New movies
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={toggleSidebar}
        >
        {
    <FaLongArrowAltRight/>
    // <ArrowForwardIosIcon/>
        }
          
        </button>
        <ul className="mt-8 space-y-2">
          <li>
            <a href="#" className="block py-2 px-4 text-gray-900 hover:bg-gray-100">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-gray-900 hover:bg-gray-100">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-gray-900 hover:bg-gray-100">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-gray-900 hover:bg-gray-100">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

