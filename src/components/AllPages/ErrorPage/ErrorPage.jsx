import React from "react";
import error from "../../../assets/Images/error.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <img className="rounded-xl opacity-50" src={error} alt="" />
      <h1 className="text-red-500 text-5xl font-bold my-5">Error 404 !!!</h1>
      <p className="text-2xl font-bold">Not Found</p>
      <Link to="/">
        <button className="btn my-5">Back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
