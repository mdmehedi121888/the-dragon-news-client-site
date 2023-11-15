import moment from "moment/moment";
import React from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  const date = moment().format("dddd, MMMM Do YYYY");
  return (
    <div className=" grid  items-center justify-center">
      <div className="flex my-5 w-full items-center justify-center">
        <div>
          <img className="" src="/assets/logo.png"></img>
        </div>
      </div>
      <div className="text-center w-full">
        <p className="my-5 text-lg font-semibold">
          Journalism Without Fear or Favour
        </p>
        <p>{date}</p>
        <div className="flex">
          <button className="btn btn-secondary">Latest</button>
          <Marquee speed={150}>
            <p>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
