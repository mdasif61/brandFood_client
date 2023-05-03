import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider()

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        toast.success("Successfully Login");
        navigate(from)
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubLogin=()=>{
    githubLogin(githubProvider)
    .then(result=>{
      toast.success("Successfully Login");
      navigate(from)
    })
    .catch(error=>{
      setError(error.message)
    })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result);
        setError("");
        toast.success("Successfully Login");
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="flex mt-36 items-center justify-center">
      <div className="bg-black bg-opacity-30 rounded-md p-10">
        <form onSubmit={handleLogin}>
          <h1 className="text-center text-2xl text-white mb-3">Login Please</h1>
          <div className="w-[400px] text-left mb-3">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              className="w-full focus:outline-none focus:bg-transparent focus:border-b-2 focus:text-white h-10 py-2 px-3 bg-white"
              type="email"
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
              type="password"
              name="password"
              placeholder="Enter Your Password"
              id=""
            />
          </div>
          <button className="btn bg-red-500 border-none text-white w-full mt-3">
            Login
          </button>
          <p className="mt-3">
            Don't Have An Account?{" "}
            <Link to="/register">
              <span className="text-red-500 underline">Register</span>
            </Link>
          </p>
        </form>
        <div className="mt-5">
          <h1 className="text-center text-white">Or</h1>
          <button
            onClick={handleGoogleLogin}
            className="flex btn w-full mt-3 border-white bg-white bg-opacity-25 rounded-md py-3 px-4"
          >
            <FaGoogle className="text-xl text-white mx-4" />{" "}
            <span className="text-white font-bold">Login With Google</span>
          </button>
          <button onClick={handleGithubLogin} className="flex bg-opacity-25 btn w-full mt-3 border-white bg-white rounded-md py-3 px-4">
            <FaGithub className="text-white text-xl mx-4" />{" "}
            <span className="text-white font-bold">Login With GitHub</span>
          </button>
        </div>
        <p className="text-red-500 mt-3 text-center">{error}</p>
      </div>
    </div>
  );
};

export default Login;
