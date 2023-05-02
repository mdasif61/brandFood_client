import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex my-16 items-center justify-center">
      <form className="bg-black bg-opacity-30 rounded-md p-10">
        <h1 className="text-center text-2xl text-white mb-3">Login Please</h1>
        <div className="w-[400px] text-left mb-3">
          <label htmlFor="email">Email</label>
          <br></br>
          <input
            className="w-full focus:outline-none focus:bg-transparent focus:border-b-2 focus:text-white h-10 py-2 px-3 bg-white"
            type="text"
            name="email"
            placeholder="Enter Your Email"
            id=""
          />
        </div>
        <div className="w-[400px] text-left mb-3">
          <label htmlFor="password">Password</label>
          <br></br>
          <input
            className="w-full focus:outline-none focus:bg-transparent focus:border-b-2 focus:text-white h-10 py-2 px-3 bg-white"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            id=""
          />
        </div>
        <button className="btn bg-red-500 border-none text-white w-full mt-3">
          Login
        </button>
        <p className="mt-3">Don't Have An Account? <Link to='/register'><span className="text-red-500 underline">Register</span></Link></p>

        <div className="mt-5">
          <h1 className="text-center text-white">Or</h1>
          <button className="flex btn w-full mt-3 border-white bg-white bg-opacity-25 rounded-md py-3 px-4">
            <FaGoogle className="text-xl text-white mx-4" />{" "}
            <span className="text-white font-bold">Login With Google</span>
          </button>
          <button className="flex bg-opacity-25 btn w-full mt-3 border-white bg-white rounded-md py-3 px-4">
            <FaGithub className="text-white text-xl mx-4" />{" "}
            <span className="text-white font-bold">Login With GitHub</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
