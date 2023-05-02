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
    <div className="md:flex justify-between text-center md:text-left items-center">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </span>
      </div>
      <h1 className="md:text-4xl text-2xl font-bold flex-1">
        Brand<span className="text-red-500 md:text-5xl">Food.C</span>
      </h1>
      <nav>
        <div
          className={`flex flex-col absolute md:flex-row md:static items-center ${
            !open ? "-top-48" : "top-12"
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 md:inline block font-semibold mx-12"
                : "mx-12"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold mx-12" : "mx-12"
            }
            to="/blog"
          >
            Blog
          </NavLink>
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn  border-none mr-5">
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
              <button className="btn mr-5 border-none text-white">
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
      {user && (
        <div
          className={`w-12 absolute md:static h-12 ${
            !open ? "-top-48" : "top-12"
          } bg-black overflow-hidden rounded-full`}
        >
          <img
            title={user.displayName}
            className="h-full"
            src={user.photoURL}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Header;
