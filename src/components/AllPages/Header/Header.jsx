import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="flex flex-col md:flex-row justify-between text-center md:text-left items-start">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </span>
      </div>
      <div className={`flex flex-col duration-300 justify-between absolute md:static md:flex-row ${!open?"-left-96 top-16":"left-0 top-16 bg-black bg-opacity-80 py-4 w-10/12"} items-center w-full`}>
      <h1 className="md:text-4xl mb-4 md:mb-0 text-2xl font-bold flex-1">
        Brand<span className="text-red-500 md:text-5xl">Food.C</span>
      </h1>
      <nav>
        <div
          className={`flex flex-col md:flex-row items-center`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 md:inline block font-semibold mx-12 mb-3"
                : "mx-12 mb-3"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold mx-12 mb-3" : "mx-12 mb-3"
            }
            to="/blog"
          >
            Blog
          </NavLink>
          {user && <div
          className={`md:w-12 md:h-12 border-4 border-white border-opacity-10 w-10 h-10 mb-3 md:mb-0 bg-black overflow-hidden rounded-full`}
        >
          <img
            title={user.displayName}
            className="h-full"
            src={user.photoURL}
            alt=""
          />
        </div>}
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn border-white md:border-none ml-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 font-semibold mx-12" : "mx-12"
                  }
                >
                  Log Out
                </NavLink>
              </button>
            </>
          ) : (
            <>
              <button className="btn ml-5 border-white md:border-none text-white">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 font-semibold mx-12" : "mx-12"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </button>
            </>
          )}
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Header;
