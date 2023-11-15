import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("successfully log out !!");
        setUser(null);
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 flex">
      <div className="flex-1 list-none gap-5 mx-auto w-[80%] items-center justify-center text-lg">
        <Link to={"/"}>Home</Link>
        <Link>About</Link>
        <Link>Career</Link>
      </div>
      {user && (
        <div className="flex justify-center gap-3">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="/public/assets/user.png"
            />
          </div>
          <button onClick={handleLogOut} className="font-bold text-xl">
            LogOut
          </button>
        </div>
      )}
      {!user && (
        <Link to={"/login"} className="font-bold text-xl">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
