import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const MidNav = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      {categoryNews.map((category, index) => (
        <Category key={index} category={category}></Category>
      ))}
    </div>
  );
};

export default MidNav;
