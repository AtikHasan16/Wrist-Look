import React from "react";

const WatchesPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">All Watches</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder for Watch Cards */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Watch Item</h2>
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchesPage;
