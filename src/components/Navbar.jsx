import React, { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
    setSidebarOpen(false); // Close the sidebar when link is clicked
  };

  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900 shadow-lg bg-[#032541] sticky top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
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
                  className="block py-2 pl-3 pr-4 rounded md:bg-transparent text-[#ffffff] text-[20px] font-mono p-[8px]"
                  aria-current="page"
                  onClick={scrollToTop} 
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rated"
                  className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:dark:hover:bg-transparent text-[#ffffff] text-[20px] font-mono p-[8px]"
                  onClick={scrollToTop} 
                >
                  Rated 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/upcomming"
                  className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent  md:dark:hover:bg-transparent text-[#ffffff] text-[20px] font-mono p-[8px]"
                  onClick={scrollToTop} 
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-72 h-full bg-[#032541] z-10 shadow-lg transform md:hidden transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='text-white w-12 mt-5 ml-52 cursor-pointer'>
          <FaLongArrowAltRight size={50} onClick={toggleSidebar}/>
        </div>

        <ul className="mt-2 space-y-2">
          <li>
            <Link to={"/"} href="#" className="block py-2 px-4 text-white text-[30px] hover:bg-black " onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/rated"}  href="#" className="block py-2 px-4 text-white text-[30px] hover:bg-black " onClick={scrollToTop}>
              Top Rated
            </Link>
          </li>
          <li>
            <Link to="/upcomming"  className="block py-2 px-4 text-white text-[30px] hover:bg-black " onClick={scrollToTop}>
              Upcoming
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
