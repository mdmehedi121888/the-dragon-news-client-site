import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const date = moment().format("MMMM Do YYYY");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="font-bold text-2xl my-5">All Caterogy</h1>
      {categories.map((category) => (
        <div key={category.id} className="text-xl my-3">
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </div>
      ))}

      {/* pic 1  */}

      <div className="card card-compact bg-base-100 shadow-xl my-5 mt-10">
        <figure>
          <img src="../../src/assets/1.png" alt="Shoes" />
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
          <img src="../../src/assets/2.png" alt="Shoes" />
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
          <img src="../../src/assets/3.png" alt="Shoes" />
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
  );
};

export default LeftNav;
