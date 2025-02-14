import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

const Timeline = () => {
  const events = [
    {
      date: "March 29, 2025",
      time: "9:00 AM",
      title: "Reporting Time",
      description: "Report to the venue and complete registration",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      date: "March 29, 2025",
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and kickoff of DevSummit Hackathon 2025",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
        </svg>
      )
    },
    {
      date: "March 29, 2025",
      time: "12:00 PM",
      title: "Hacking Begins",
      description: "Start working on your innovative solutions",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      date: "March 29, 2025",
      time: "1:00 PM",
      title: "Mentorship Sessions",
      description: "Get guidance from industry experts",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      date: "March 30, 2025",
      time: "12:00 PM",
      title: "Project Submission",
      description: "Submit your projects for evaluation",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      date: "March 30, 2025",
      time: "2:00 PM",
      title: "Final Presentations",
      description: "Present your solutions to the judges",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="timeline" className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${bgDevSummit})` }}
        />
        <div className="animated-bg" />
        <FloatingParticles count={30} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <SectionTransition className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white"
            variants={fadeInUp}
          >
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Timeline
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Mark your calendar for these important dates and times
          </motion.p>
        </SectionTransition>

        <div className="max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex items-start mb-8 sm:mb-12 last:mb-0 group"
            >
              {/* Timeline Line with Glow Effect */}
              <div className="absolute left-[20px] xs:left-[24px] sm:left-[28px] top-0 w-0.5 h-full bg-gradient-to-b from-[#A7FF40]/30 to-transparent">
                <motion.div 
                  className="absolute top-[24px] xs:top-[28px] -left-1.5 w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 
                    rounded-full bg-[#A7FF40] group-hover:shadow-[0_0_10px_rgba(167,255,64,0.6)]
                    transition-shadow duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                />
              </div>

              {/* Content */}
              <div className="ml-12 xs:ml-14 sm:ml-16 flex-1">
                <motion.div 
                  className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 
                    border border-[#A7FF40]/20 group-hover:border-[#A7FF40]/40 
                    shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                    transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-black/50 p-2 border border-[#A7FF40]/20 
                      group-hover:border-[#A7FF40]/40 flex items-center justify-center text-[#A7FF40]"
                    >
                      {event.icon}
                    </div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#A7FF40]">
                      {event.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-sm xs:text-base text-gray-400 mb-2 relative z-10">
                    <span>{event.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A7FF40]/50" />
                    <span>{event.time}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm xs:text-base relative z-10">
                    {event.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{sectionStyles}</style>
    </section>
  );
};

export default Timeline;
