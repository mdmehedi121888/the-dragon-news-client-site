import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import SingleNews from "./SingleNews";
import Footer from "./Footer";

const NewsDetails = () => {
  const news = useLoaderData();
  return (
    <div>
      <div className="lg:container mx-auto mb-5">
        <Header></Header>
        <Navbar></Navbar>
        <div className="flex w-[100%] my-5">
          <div className="w-[90%]">
            <SingleNews news={news}></SingleNews>
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

export default NewsDetails;
