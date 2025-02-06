import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const Timeline = () => {
  const events = [
    {
      date: "April 5, 2024",
      time: "9:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and kickoff of DevSummit Hackathon 2024"
    },
    {
      date: "April 5, 2024",
      time: "10:00 AM",
      title: "Team Formation",
      description: "Form your teams and get ready for the challenge"
    },
    {
      date: "April 5, 2024",
      time: "11:00 AM",
      title: "Hacking Begins",
      description: "Start working on your innovative solutions"
    },
    {
      date: "April 6, 2024",
      time: "10:00 AM",
      title: "Mentorship Sessions",
      description: "Get guidance from industry experts"
    },
    {
      date: "April 6, 2024",
      time: "4:00 PM",
      title: "Project Submission",
      description: "Submit your projects for evaluation"
    },
    {
      date: "April 6, 2024",
      time: "6:00 PM",
      title: "Final Presentations",
      description: "Present your solutions to the judges"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-black">
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
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white">
            Event Timeline
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Mark your calendar for these important dates and times
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-[28px] top-0 w-0.5 h-full bg-[#A7FF40]/30">
                <div className="absolute top-[28px] -left-1 w-3 h-3 rounded-full bg-[#A7FF40]"></div>
              </div>

              {/* Content */}
              <div className="ml-16 flex-1">
                <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-300 hover:bg-[#1a1a1a]/60 hover:scale-[1.02]">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-[#A7FF40]">
                      {event.title}
                    </h3>
                    <div className="text-sm text-gray-400">
                      {event.date} - {event.time}
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add to Calendar Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-8 py-4 bg-[#A7FF40] text-black rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Add to Calendar
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
