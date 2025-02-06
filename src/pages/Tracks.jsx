import React from 'react';
import Summit from '../assets/bgDevSummit.png';
import Blockchain from '../assets/blockchain.png';
import Healthcare from '../assets/healthcare.png';
import Innovation from '../assets/Innovation.png';
import Iot from '../assets/Iot.png';
import Ai from '../assets/Ai.png';
import Social from '../assets/socialskills.png';

const Track = () => {
    return (
        <>
            <header className="header sm:h-[400vh] md:h-[300vh] lg:h-[200vh] h-[300vh] text-white py-8 " style={{ backgroundImage: `url(${Summit})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='text flex flex-col lg:flex-row h-auto relative top-[-5rem] items-center justify-around w-full px-4'>
                    <h1 className='text-white text-start relative top-[-2rem]'>Explore Hackathon <br /> Tracks in Depth</h1>
                    <div className="start text-center lg:text-left">
                        <h3 className='text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] font-normal'>Explore exciting tracks designed to inspire <br /> innovation and creativity. Solve real challenges <br /> and shape the future with your ideas.</h3>
                        <button className='h-12 w-36 font-bold bg-discord-green text-black rounded-[2rem] mt-4'>Get Started</button>
                    </div>
                </div>
                <div className="technology h-auto relative top-[3rem] w-[90%] mx-auto">
                    <div className="tech-01 flex flex-col lg:flex-row h-auto w-full items-center justify-around mb-4">

                        {/* Blockchain Image */}
                        <div className="box1 h-[17rem] w-[17rem] bg-white flex flex-col items-center justify-center m-4 rounded-xl">
                            <img className='h-full w-full object-contain mb-4 p-2' src={Blockchain} alt="blockchain" />
                            <p className="text-black mt-2 text-[1.2rem] relative top-[-0.5rem]">Blockchain</p>
                        </div>

                        {/* HeathCare Image */}
                        <div className="box2 h-[17rem] w-[17rem] bg-white flex flex-col items-center justify-center m-4 rounded-xl">
                            <img className='h-full w-full object-contain mb-4 p-2' src={Healthcare} alt="HealthCare" />
                            <p className="text-black mt-2 text-[1.2rem] relative top-[-0.5rem]">Healthcare</p>
                        </div>

                        {/* AI/Ml Image */}
                        <div className="box3 h-[17rem] w-[17rem] bg-white flex flex-col items-center justify-center m-4 rounded-xl">
                            <img className='h-full w-full object-contain mb-4 p-2' src={Ai} alt="Ai/Ml" />
                            <p className="text-black mt-2 text-[1.2rem] relative top-[-0.5rem]">AI/ML</p>
                        </div>
                    </div>

                    {/* Innovation Image */}
                    <div className="tech-01 flex flex-col lg:flex-row h-auto w-full items-center justify-around">
                        <div className="box1 h-[17rem] w-[17rem] bg-white flex flex-col items-center justify-center m-4 rounded-xl">
                            <img className='h-full w-full object-contain mb-4 p-2' src={Innovation} alt="Innovation" />
                            <p className="text-center mt-2 text-black text-[1.2rem] relative top-[-0.5rem]">Innovation</p>
                        </div>

                        {/* Internet of Things Image */}
                        <div className="box2 h-[17rem] w-[17rem] bg-white flex flex-col items-center justify-center m-4 rounded-xl">
                            <img className='h-full w-full object-contain mb-4 p-2' src={Iot} alt="IOT" />
                            <p className="text-center mt-2 text-black text-[1.2rem] relative top-[-0.5rem]">Internet of Things</p>
                        </div>

                        {/* Social Skills Image  */}
                        <div className="box3 h-[17rem] w-[17rem] bg-white flex flex-col items-center justify-center m-4 rounded-xl">
                            <img className='h-full w-full object-contain mb-4 p-2' src={Social} alt="social skills" />
                            <p className="text-center mt-2 relative top-[-0.5rem] text-black text-[1.2rem]">Sustainable <br /> Development</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Track
