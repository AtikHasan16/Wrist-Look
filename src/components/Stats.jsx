import React from "react";

const Stats = () => {
  return (
    <div className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="stats shadow w-full bg-base-200 stats-vertical lg:stats-horizontal">
          <div className="stat place-items-center">
            <div className="stat-title">Happy Customers</div>
            <div className="stat-value text-primary">31K</div>
            <div className="stat-desc">From Jan 1st to Feb 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">New Products</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Years of Experience</div>
            <div className="stat-value">12</div>
            <div className="stat-desc">Since 2012</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
