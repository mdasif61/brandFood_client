import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between py-14 px-20 bg-black mt-5 border-t-2">
        <nav>
          <h1 className="text-4xl font-bold flex-1 py-2 mb-4 border-b-2">
            Brand<span className="text-red-500 text-5xl">Food</span>
          </h1>
          <ul>
            <li className="hover:underline mt-4">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline mt-4">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:underline mt-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:underline mt-4">
              <Link>Food</Link>
            </li>
            <li className="hover:underline mt-4">
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-red-500 mb-5">NEWSLETTER</h1>
          <input
            className="mt-5 bg-white w-[350px] py-2 px-3 rounded-lg"
            type="text"
            placeholder="subscribe now"
            name=""
            id=""
          />
          <button className="btn border-red-500 bg-transparent mt-6 hover:bg-transparent hover:bg-red-500 text-white">
            Subscribe Now
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl mb-5">Contact</h1>
          <p className="text-center mb-5">123, Guangzhou City,<br/>China, No. 99 </p>
          <div className="flex">
          <span className="text-2xl m-3">
                <FaGoogle />
              </span>
              <span className="text-2xl m-3">
                <FaFacebook />
              </span>
              <span className="text-2xl m-3">
                <FaInstagram />
              </span>
              <span className="text-2xl m-3">
                <FaTwitter />
              </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
