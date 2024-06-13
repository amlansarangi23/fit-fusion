import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    logout()
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/gymnastics.png" alt="gymnastics"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Fit Fusion
            </span>
          </Link>
          <button
            onClick={handleToggle}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto duration-200`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    currentPath === "/" ? "text-blue-700" : "text-white"
                  }`}
                  aria-current={currentPath === "/" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>

              {user && (
                <li className="flex justify-between">
                <Link
                  to=""
                  onClick={handleClick}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 text-gray-400`}
                >
                  Logout
                </Link>
                <span className="text-slate-200 flex gap-2 ml-6 items-center"><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/user.png" alt="user"/>{user.email}</span>
              </li>
              )}

              {!user && (
                <>
                  <li>
                  <Link
                    to="/login"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                      currentPath === "/login" ? "text-blue-700" : "text-white"
                    }`}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                      currentPath === "/signup" ? "text-blue-700" : "text-white"
                    }`}
                  >
                    Signup
                  </Link>
                </li>
                </>
              )}
              
              <li>
                <Link
                  to="/about"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    currentPath === "/about" ? "text-blue-700" : "text-white"
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
