import React, { useContext } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RightNav = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const handleGoogle = (event) => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast("successfully login with Google !!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  const handleGithub = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        toast("successfully login with Github !!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div>
      <h1 className="font-bold text-2xl my-5">Login With</h1>
      <div className="grid">
        <button onClick={handleGoogle}>
          <div className="flex items-center justify-center gap-2 border-2 py-3 font-bold border-blue-700	">
            <FaGoogle />
            <h1>Login with Google</h1>
          </div>
        </button>
        <button onClick={handleGithub}>
          <div className="flex items-center font-bold justify-center gap-2 border-2 border-blue-700	 py-3 my-3">
            <FaGithub />
            <h1>Login with Github</h1>
          </div>
        </button>
      </div>
      <h1 className="font-bold text-2xl my-5">Find Us On</h1>
      <Link className="">
        <div className=" border-emerald-600		border-2 flex items-center gap-2 py-3 my-3 pl-5">
          <FaFacebook />
          <h1 className="font-bold">Facebook</h1>
        </div>
      </Link>
      <Link>
        <div className="flex border-emerald-600	 items-center gap-2 border-2 py-3 my-3 pl-5">
          <FaTwitter />
          <h1 className="font-bold">Twitter</h1>
        </div>
      </Link>
      <Link>
        <div className="flex border-emerald-600	 items-center gap-2 border-2 py-3 my-3 pl-5">
          <FaInstagram />
          <h1 className="font-bold">Instagram</h1>
        </div>
      </Link>

      {/* Q zone section start  */}
      <h1 className="font-bold text-2xl my-5">Q-Zone</h1>
      {/* 1st qzone swimming  */}

      <div className="card card-compact w-full bg-base-100 shadow-xl my-3">
        <figure>
          <img src="../../src/assets/qZone1.png" alt="Shoes" />
        </figure>
      </div>

      {/* 2nd qzone swimming  */}

      <div className="card card-compact w-full bg-base-100 shadow-xl my-3">
        <figure>
          <img src="../../src/assets/qZone2.png" alt="Shoes" />
        </figure>
      </div>

      {/* 3rd qzone swimming  */}

      <div className="card card-compact w-full bg-base-100 shadow-xl my-3">
        <figure>
          <img src="../../src/assets/qZone3.png" alt="Shoes" />
        </figure>
      </div>

      {/* amazing section  */}
      <div
        style={{ backgroundImage: 'url("../../src/assets/bg.png")' }}
        className="text-white text-center"
      >
        <h1 className="font-bold text-2xl my-5">Create an Amazing Newspaper</h1>
        <p className="text-lg my-3">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-secondary my-5">Learn More</button>
      </div>
    </div>
  );
};

export default RightNav;
