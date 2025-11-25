import React from "react";

const Stats = () => {
  return (
    <div className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="stats shadow w-full bg-base-200 stats-vertical lg:stats-horizontal">
          <div className="stat place-items-center">
            <div className="">Happy Customers</div>
            <div className=" text-5xl my-4 font-bold text-primary">31K</div>
            <div className="">From Jan 1st to Feb 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="">New Products</div>
            <div className=" text-5xl my-4 font-bold text-secondary">4,200</div>
            <div className="">↗︎ 400 (22%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="">Years of Experience</div>
            <div className=" text-5xl my-4 font-bold">12</div>
            <div className="">Since 2012</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
