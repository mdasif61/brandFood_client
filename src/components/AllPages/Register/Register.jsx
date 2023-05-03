import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import toast from 'react-hot-toast';

const Register = () => {
  const [error,setError]=useState("");
  const [success,setSuccess]=useState("")
  const {createUser,profile,logOut}=useContext(AuthContext)
  const navigate=useNavigate()

  const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photoURL=form.photo.value;
    console.log(name,email,password,photoURL);

    // user info validation start
    if(!password){
      setError("password has been required");
      return;
    }else if(password.length<6){
      setError("password at least 6 characters !!")
      return;
    }else if(!email){
      setError("email has been required");
      return;
    }else if(!email.includes("@")){
      setError("email not valid");
      return;
    }
    // user info validation end

    createUser(email,password)
    .then(result=>{
      const users=result.user;
      console.log(users)
      setError("");
      logOut()
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        console.log(error)
      })
      toast.success("Successfully Register");
      profile(users,photoURL,name)
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        setError(error.message)
      })
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    })
    .catch(error=>{
      console.log(error)
      setSuccess("")
      setError(error.message)
    })

  }

  return (
    <div className="min-h-[70vh] flex my-16 items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-black bg-opacity-30 rounded-md p-10">
        <h1 className="text-center text-2xl text-white mb-3">Register Please</h1>
        <div className="w-[400px] text-left mb-3">
          <label htmlFor="name">Name</label>
          <br></br>
          <input
            className="w-full focus:outline-none focus:bg-transparent focus:border-b-2 focus:text-white h-10 py-2 px-3 bg-white"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            id=""
          />
        </div>
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
        <div className="w-[400px] text-left mb-3">
          <label htmlFor="photo">Photo URL</label>
          <br></br>
          <input
            className="w-full focus:outline-none focus:bg-transparent focus:border-b-2 focus:text-white h-10 py-2 px-3 bg-white"
            type="text"
            name="photo"
            placeholder="Enter Your Photo URL"
            id=""
          />
        </div>
        <button className="btn bg-red-500 border-none text-white w-full mt-3">Register</button>
        <p className="mt-3">Already Have An Account? <Link to='/login'><span className="text-red-500 underline">Login</span></Link></p>
        <p className="text-center text-red-500 mt-4">{error}</p>
      </form>
    </div>
  );
};

export default Register;
