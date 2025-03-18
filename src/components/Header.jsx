import React from "react";
import { motion } from "framer-motion";

// Update these paths if needed:
import DevSummit from "../assets/Devsummit.png";
import bgDevSummit from "../assets/bgDevSummit.png";
import Ellipse from "../assets/Ellipse.png";

// ========== Tech Illustrations ========== //
const CodeBlock = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.8 }}
    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    className="absolute top-[15%] left-[10%] sm:block w-[40px] h-[40px] sm:w-[80px] sm:h-[80px]"
  >
    <path
      d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5H16M8 5V3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V5M8 5H16"
      stroke="#A7FF40"
      strokeWidth="1.5"
    />
    <path
      d="M8 12L11 15L16 10"
      stroke="#A7FF40"
      strokeWidth="1.5"
    />
  </motion.svg>
);

const Rocket = () => (
  <motion.svg
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 0.8, y: 0 }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    width="100"
    height="100"
    viewBox="0 0 24 24"
    fill="none"
    className="absolute top-[20%] right-[10%] sm:block w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]"
  >
    <path
      d="M12 15L9 12M12 15L15 12M12 15V9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#A7FF40"
      strokeWidth="1.5"
    />
  </motion.svg>
);

const Cube = () => (
  <motion.svg
    initial={{ opacity: 0, rotate: 0 }}
    animate={{ opacity: 0.8, rotate: 360 }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    width="70"
    height="70"
    viewBox="0 0 24 24"
    fill="none"
    className="absolute bottom-[20%] left-[15%] sm:block w-[35px] h-[35px] sm:w-[70px] sm:h-[70px]"
  >
    <path
      d="M12 3L4 7V17L12 21L20 17V7L12 3Z"
      stroke="#A7FF40"
      strokeWidth="1.5"
    />
    <path
      d="M4 7L12 11M12 11L20 7M12 11V21"
      stroke="#A7FF40"
      strokeWidth="1.5"
    />
  </motion.svg>
);

const Circuit = () => (
  <motion.svg
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.8, scale: 1 }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
    width="90"
    height="90"
    viewBox="0 0 24 24"
    fill="none"
    className="absolute bottom-[25%] right-[15%] sm:block w-[45px] h-[45px] sm:w-[90px] sm:h-[90px]"
  >
    <path
      d="M12 6V4M12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12M12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12M12 12V14M12 18V20M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12M12 18C10.3431 18 9 16.6569 9 15C9 13.3431 10.3431 12 12 12"
      stroke="#A7FF40"
      strokeWidth="1.5"
    />
  </motion.svg>
);

// ========== Arrow (Color Toned Down) ========== //
const ScrollDownIndicator = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="pointer-events-auto flex items-center cursor-pointer group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      onClick={scrollToNextSection}
    >
      <motion.div
        className="relative w-16 h-16"
        // Gentle bobbing animation
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          // Subtle glow (less intense than before)
          filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.2))",
        }}
      >
        <motion.svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          className="w-16 h-16"
        >
          <path
            d="M12 4L12 20M12 20L6 14M12 20L18 14"
            stroke="#A7FF40"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

function Header() {
  return (
    <header
      id="home"
      className="relative min-h-[100dvh] w-full text-white overflow-hidden"
    >
      {/* Background with stars */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bgDevSummit})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Ellipse Background */}
      <div
        style={{ backgroundImage: `url(${Ellipse})` }}
        className="absolute top-0 left-0 h-full w-full min-h-[100dvh] bg-cover bg-center z-[2]"
      />

      {/* Tech Illustrations */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <CodeBlock />
        <Rocket />
        <Cube />
        <Circuit />
      </div>

      {/* Animated stars overlay */}
      <div className="absolute inset-0 w-full h-full z-[2]">
        <div className="stars-container">
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                width: index % 3 === 0 ? "3px" : "2px",
                height: index % 3 === 0 ? "3px" : "2px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto min-h-[100dvh] flex flex-col justify-center items-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.h1
              className="text-[36px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-1 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="block mb-0 sm:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Unlock the power of
              </motion.span>
              {/* "innovation" with a green gradient */}
              <motion.span
                className="
                  block
                  mt-0
                  relative
                  bg-clip-text
                  text-transparent
                  bg-gradient-to-r
                  from-[#A7FF40]
                  to-[#65D000]
                "
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                innovation
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#A7FF40]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </motion.span>
            </motion.h1>
          </div>

          {/* Logo */}
          <motion.div
            className="my-4 sm:my-2 transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              className="h-auto w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto"
              src={DevSummit}
              alt="Devsummit"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center mt-4 sm:mt-2 w-full max-w-[300px] sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >

          </motion.div>
        </motion.div>
      </div>

      {/* Register Button Container */}
      <div className="absolute bottom-44 left-1/2 transform -translate-x-1/2 z-[20]">
        <motion.div
          className="
            inline-flex items-center justify-center
            px-12 py-4
            w-[200px] sm:w-[250px]
            bg-gradient-to-r from-[#A7FF40] to-[#65D000]
            text-black 
            rounded-full 
            font-semibold 
            text-base sm:text-lg
            transition-all
            cursor-default text-nowrap
          "
          style={{
            boxShadow: "0 0 10px rgba(167,255,64,0.6), 0 0 20px rgba(167,255,64,0.4)",
          }}
        >
          Registration closed
        </motion.div>
      </div>

      {/* Arrow near bottom */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-[20] pointer-events-auto">
        <ScrollDownIndicator />
      </div>

      {/* Extra styles for the stars */}
      <style jsx>{`
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 1.5s infinite;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
