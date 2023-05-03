import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col text-center md:text-left md:flex-row justify-between py-14 md:px-20 bg-black mt-5 border-t-2">
        <nav>
          <h1 className="md:text-4xl text-xl font-bold flex-1 py-2 mb-4 md:border-b-2">
            Brand<span className="text-red-500 text-xl md:text-5xl">Food</span>
          </h1>
          {/* all links footer start */}
          <ul>
            <li className="hover:underline mt-4">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline mt-4">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:underline mt-4">
              <Link>Contact</Link>
            </li>
            <li className="hover:underline mt-4">
              <Link>Food</Link>
            </li>
            <li className="hover:underline mt-4">
              <Link>Terms & Conditions</Link>
            </li>
          </ul>
          {/* all links footer end */}
        </nav>
        <div className="flex flex-col md:mt-0 mt-10 items-center justify-center">
          <h1 className="md:text-3xl text-xl text-red-500 md:mb-5 mb-2">
            NEWSLETTER
          </h1>
          <input
            className="mt-5 bg-white md:w-[350px] w-9/12 py-2 px-3 rounded-lg"
            type="text"
            placeholder="subscribe now"
            name=""
            id=""
          />
          <button className="btn border-red-500 bg-transparent mt-6 hover:bg-red-500 text-white mb-5 md:mb-0">
            Subscribe Now
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="md:text-3xl text-xl mb-5">Contact</h1>
          <p className="text-center mb-5">
            123, Guangzhou City,
            <br />
            China, No. 99{" "}
          </p>
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
