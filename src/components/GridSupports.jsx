import React from "react";

const GridSupports = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-72 gap-y-6    relative left-[21%] top-40 w-60 h-60">
        {Array.from({ length: 9 }).map((item, index) => (
          <div key={index} className="w-64 h-28 bg-white rounded-md"></div>
        ))}
      </div>
    </>
  );
};

export default GridSupports;
