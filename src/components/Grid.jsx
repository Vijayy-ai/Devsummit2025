import React from 'react'

const Grid = () => {
  return (
    <>
    <div className='grid grid-cols-5 gap-x-44 gap-y-8    relative left-[20%] top-40 w-60 h-60'>
        {Array.from({length: 20}).map((item,index) =>(
        <div key={index} className='w-36 h-36 bg-white rounded-md'></div>
        ))}
    </div>
    </>
  );
};

export default Grid
