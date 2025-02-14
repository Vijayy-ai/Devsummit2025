import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const Timeline = () => {
  const events = [
    {
      date: "March 29, 2025",
      time: "9:00 AM",
      title: "Reporting Time",
      description: "report to the venue"
    },
    {
      date: "March 29, 2025",
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and kickoff of DevSummit Hackathon 2025"
    },
    {
      date: "March 29, 2025",
      time: "12:00 PM",
      title: "Hacking Begins",
      description: "Start working on your innovative solutions"
    },
    {
      date: "March 29, 2025",
      time: "1:00 PM",
      title: "Mentorship Sessions",
      description: "Get guidance from industry experts"
    },
    {
      date: "March 30, 2025",
      time: "12:00 PM",
      title: "Project Submission",
      description: "Submit your projects for evaluation"
    },
    {
      date: "March 30, 2025",
      time: "2:00 PM",
      title: "Final Presentations",
      description: "Present your solutions to the judges"
    }
  ];

  return (
    <section id="timeline" className="relative py-12 xs:py-16 sm:py-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${bgDevSummit})` }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-white">
            Event Timeline
          </h2>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-2xl mx-auto">
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
              className="relative flex items-start mb-8 sm:mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-[20px] xs:left-[24px] sm:left-[28px] top-0 w-0.5 h-full bg-[#A7FF40]/30">
                <div className="absolute top-[24px] xs:top-[28px] -left-1 w-2 xs:w-2.5 sm:w-3 h-2 xs:h-2.5 sm:h-3 rounded-full bg-[#A7FF40]"></div>
              </div>

              {/* Content */}
              <div className="ml-12 xs:ml-14 sm:ml-16 flex-1">
                <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-[#A7FF40]/20 
                  hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] 
                  transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-[#A7FF40]">
                      {event.title}
                    </h3>
                    <div className="text-xs xs:text-sm text-gray-400">
                      {event.date} - {event.time}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm xs:text-base">{event.description}</p>
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
          className="text-center mt-8 sm:mt-12"
        >
          <button className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-[#1a1a1a] text-[#A7FF40] 
            border-2 border-[#A7FF40] rounded-full text-sm sm:text-base font-semibold hover:bg-[#A7FF40] 
            hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
