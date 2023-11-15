import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import LeftNav from "./components/LeftNav";
import MidNav from "./components/MidNav";
import RightNav from "./components/RightNav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="lg:container mx-auto mb-5">
        <Header></Header>
        <Navbar></Navbar>
        <div className="flex w-[100%]">
          <div className="w-[30%]">
            <LeftNav></LeftNav>
          </div>
          <div className="w-[60%]">
            <Outlet></Outlet>
          </div>
          <div className="w-[30%]">
            <RightNav></RightNav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
