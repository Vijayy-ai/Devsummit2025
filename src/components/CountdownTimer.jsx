import React, { useState, useEffect } from "react";
import bgDevSummit from "../assets/bgDevSummit.png";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${bgDevSummit})` }}
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

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              Countdown to DevSummit
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="bg-[#A7FF40] rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105">
                    <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="text-sm md:text-base font-medium text-black/80">
                      {unit.label}
                    </div>
                  </div>
                  {isHovered === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm whitespace-nowrap"
                    >
                      {unit.value} {unit.label.toLowerCase()} remaining
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8 text-gray-300">
              <p>Join us on {new Date(targetDate).toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
