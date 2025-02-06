import React from 'react';
import Summit from '../assets/bgDevSummit.png';
import Grid from './Grid';

function Mentor() {
  return (
    <section className="mentors h-[180vh]  w-screen" style={{ backgroundImage: `url(${Summit})`, backgroundPosition: "center", backgroundSize: "cover" }}>
      <h1 className='text-white text-5xl relative top-20 left-[2rem] text-center font-mono'>Meet Our Expert Mentors</h1>
      <Grid />
    </section>
  );
}

export default Mentor;
