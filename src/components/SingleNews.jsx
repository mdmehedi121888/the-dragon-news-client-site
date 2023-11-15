import moment from "moment";
import React from "react";
import { FaArrowLeft, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleNews = ({ news }) => {
  const { details, thumbnail_url, title, category_id, author } = news;
  const id = category_id;
  const date = moment().format("MMMM Do YYYY");
  return (
    <div className="">
      <div className="card card-compact bg-base-100 shadow-xl mx-5 my-10">
        <figure>
          <img
            className="w-[90%]"
            style={{ height: "600px" }}
            src={thumbnail_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h1 className="font-bold text-2xl my-5">{title}</h1>
          <p className="text-lg my-3">{details}</p>
          <Link
            to={`/category/${id}`}
            className="lg:w-[30%] flex items-center gap-3 font-semibold bg-blue-600 text-white px-5 py-5 rounded-md w-[70%] text-lg"
          >
            <FaArrowLeft />
            All the news in this category
          </Link>
        </div>
      </div>
      <div className="lg:flex gap-3 gird grid-cols-1">
        {/* pic 1  */}

        <div className="card card-compact bg-base-100 shadow-xl my-5 mt-10">
          <figure>
            <img src="/assets/1.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>

            <div className="flex justify-between">
              <h1>Sports</h1>
              <div className="flex gap-3 items-center justify-center">
                <FaCalendar />
                <h1>{date}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* pic 2  */}

        <div className="card card-compact bg-base-100 shadow-xl my-5 mt-10">
          <figure>
            <img src="/assets/2.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>

            <div className="flex justify-between">
              <h1>Sports</h1>
              <div className="flex gap-3 items-center justify-center">
                <FaCalendar />
                <h1>{date}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* pic 3  */}

        <div className="card card-compact bg-base-100 shadow-xl my-5 mt-10">
          <figure>
            <img src="/assets/3.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>

            <div className="flex justify-between">
              <h1>Sports</h1>
              <div className="flex gap-3 items-center justify-center">
                <FaCalendar />
                <h1>{date}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
