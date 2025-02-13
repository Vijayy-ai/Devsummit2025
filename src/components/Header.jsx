import React from "react";
import DevSummit from "../assets/Devsummit.png";
import bgDevSummit from "../assets/bgDevSummit.png";
import Ellipse from "../assets/Ellipse.png"
function Header() {
  const handleDiscordClick = () => {
    window.open('YOUR_DISCORD_LINK', '_blank');
  };

  return (
    <header id="home" className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Background with stars */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bgDevSummit})` }}
      />
      {/* Ellipse Background  */}
      <div 
        style={{ backgroundImage: `url(${Ellipse})` }} 
        className="absolute top-0 left-0 h-full w-full min-h-screen bg-cover bg-center"
      />

      {/* Animated stars overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="stars-container">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center relative z-10">
        {/* Hero Content */}
        <div className="text-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Unlock the power of{" "}
            <br className="hidden sm:block" />
            innovation with
          </h1>
          
          {/* Logo */}
          <div className="my-6 sm:my-8 transform hover:scale-105 transition-transform duration-300">
            <img
              className="h-auto w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mx-auto"
              src={DevSummit}
              alt="Devsummit"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8 px-4">
            <a 
              href="#"
              className="w-full sm:w-[200px] h-[54px] bg-[#A7FF40] text-black rounded-3xl font-semibold 
                hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center cursor-not-allowed opacity-75"
            >
              Registration Opening Soon
            </a>
            <a 
              href="https://discord.gg/VtJ9Qk3p"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[165px] h-[54px] text-[#A7FF40] border-2 border-[#A7FF40] rounded-3xl 
                font-semibold hover:bg-[#A7FF40] hover:bg-opacity-10 transition-all transform hover:scale-105
                flex items-center justify-center"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
