import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {

  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
  }

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold flex-1">
        Brand<span className="text-red-500 text-5xl">Food.C</span>
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
        {user?<><button onClick={handleLogOut} className="btn  border-none mr-5"><NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold mx-12" : "mx-12"
          }

        >
          Log Out
        </NavLink></button></>:<><button className="btn mr-5 border-none text-white"><NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold mx-12" : "mx-12"
          }
          to="/login"
        >
          Login
        </NavLink></button></>}
      </nav>
      {user && <div className="w-12 h-12 bg-black overflow-hidden rounded-full">
        <img
          title={user.displayName}
          className="h-full"
          src={user.photoURL} 
          alt=""
        />
      </div>}
    </div>
  );
};

export default Header;
