import React from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photoURL=form.photo.value;
    console.log(name,email,password,photoURL)
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
            placeholder="Enter Your Name"
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
      </form>
    </div>
  );
};

export default Register;
