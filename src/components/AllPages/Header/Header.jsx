import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold flex-1">
        Brand<span className="text-red-500 text-5xl">Food</span>
      </h1>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold mx-12" : "mx-12"
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
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold mx-12" : "mx-12"
          }
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold mx-12" : "mx-12"
          }
          to="/register"
        >
          Register
        </NavLink>
      </nav>
      <div className="w-12 h-12 bg-black overflow-hidden rounded-full">
        <img
          className="h-full"
          src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
