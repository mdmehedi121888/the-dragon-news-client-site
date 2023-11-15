import React from "react";
import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import NewsDetails from "./NewsDetails";

const Category = ({ category }) => {
  const { author, details, rating, thumbnail_url, title, total_view, _id } =
    category;
  const { img, name, published_date } = author;
  const { number } = rating;
  return (
    <div className="card bg-base-100 shadow-xl my-5 mx-5">
      <div className="flex justify-between my-3 bg-slate-100">
        {/* author section  */}
        <div className="flex items-center gap-3 ">
          <img className="h-20 rounded-full" src={img} alt="" />
          <div className="items-center justify-center">
            <h1>{name}</h1>
            <h1>{published_date}</h1>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center mr-5">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>
      <h2 className="card-title my-3">{title}</h2>
      <figure className="w-full">
        <img className="w-[80%] h-96" src={thumbnail_url} alt="Album" />
      </figure>
      <div className="card-body">
        <p>{details.slice(0, 300)}........</p>
        <Link
          to={`/news/${_id}`}
          // to={<NewsDetails></NewsDetails>}
          className="text-yellow-400 font-bold text-lg	"
        >
          Read More
        </Link>
        <hr></hr>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <ReactStars
              count={5}
              size={24}
              value={number}
              activeColor="#ffd700"
              // value={rating}
            />
            <p>{number}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEye />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
