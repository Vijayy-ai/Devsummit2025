import React, { useState } from 'react';
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
  const [activeDay, setActiveDay] = useState('Day 1');

  const timelineData = {
    "Day 1": [
      {
        time: "07:30 AM",
        title: "Team Reporting Time",
        description: "All teams to report at the venue"
      },
      {
        time: "08:00 AM",
        title: "Team Registrations",
        description: "Registration and check-in process begins"
      },
      {
        time: "09:30 AM",
        title: "Inaugural Ceremony",
        description: "Official opening of DevSummit Hackathon"
      },
      {
        time: "11:30 AM",
        title: "Hackathon Flow Overview",
        description: "Detailed briefing about the hackathon process"
      },
      {
        time: "12:00 PM",
        title: "Official Hackathon Start",
        description: "Begin your innovative journey"
      },
      {
        time: "01:00 PM",
        title: "Lunch",
        description: "Lunch break for all participants"
      },
      {
        time: "03:00 PM",
        title: "Mentoring Round 1",
        description: "First mentoring session with industry experts"
      },
      {
        time: "04:30 PM",
        title: "Interactive Session 1",
        description: "Engaging session "
      },
      {
        time: "05:20 PM",
        title: "Interactive Session 2",
        description: "Second interactive session"
      },
      {
        time: "08:00 PM",
        title: "Interactive Session 3",
        description: "Third interactive session of the day"
      },
      {
        time: "09:30 PM",
        title: "Dinner",
        description: "Dinner break for all participants"
      },
      {
        time: "12:00 AM",
        title: "Hands-on Workshop",
        description: "Late night workshop session"
      }
    ],
    "Day 2": [
      {
        time: "01:00 AM",
        title: "Fun Time",
        description: "Entertainment activities to keep the energy high"
      },
      {
        time: "01:00 AM",
        title: "Midnight Snacks",
        description: "Light refreshments for the night"
      },
      {
        time: "07:00 AM",
        title: "Breakfast",
        description: "Morning breakfast for all participants"
      },
      {
        time: "09:00 AM",
        title: "Mentoring Round",
        description: "Final mentoring session before submission"
      },
      {
        time: "10:30 AM",
        title: "Expert Talk",
        description: "Insightful session with industry expert"
      },
      {
        time: "12:00 PM",
        title: "Submission",
        description: "Final project submission deadline"
      },
      {
        time: "01:00 PM",
        title: "Judging Round 1 & 2",
        description: "Project evaluation by judges",
        duration: "01:00 PM - 03:00 PM"
      },
      {
        time: "03:00 PM",
        title: "Lunch",
        description: "Lunch break for all participants"
      },
      {
        time: "04:00 PM",
        title: "Top 10 Teams Announcement",
        description: "Announcement of finalists"
      },
      {
        time: "05:30 PM",
        title: "Winners Announcement",
        description: "Declaration of hackathon winners"
      },
      {
        time: "06:00 PM",
        title: "Wind-Up",
        description: "Closing ceremony and farewell"
      }
    ]
  };

  return (
    <section id="timeline" className="relative py-16 sm:py-20 overflow-hidden bg-black">
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
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Timeline
            </span>
          </motion.h2>

          {/* Day Selection Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {["Day 1", "Day 2"].map((day) => (
              <motion.button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300
                  ${activeDay === day 
                    ? "bg-[#A7FF40] text-black" 
                    : "bg-[#1a1a1a]/60 text-[#A7FF40] hover:bg-[#1a1a1a]/80"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {day}
              </motion.button>
            ))}
          </div>

          {/* Timeline Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            key={activeDay}
            className="max-w-4xl mx-auto"
          >
            {/* Timeline items */}
            {timelineData[activeDay].map((event, index) => (
              <motion.div
                key={`${activeDay}-${index}`}
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                className="flex gap-4 md:gap-6 mb-8 relative group"
              >
                {/* Timeline Line with Glow Effect */}
                <div className="flex-none w-24 sm:w-32 text-right">
                  <span className="text-[#A7FF40] font-medium text-sm sm:text-base">{event.time}</span>
                </div>
                
                <div className="w-px bg-gradient-to-b from-[#A7FF40]/50 to-[#A7FF40]/10 relative">
                  <div className="absolute w-3 h-3 rounded-full bg-[#A7FF40] -left-[5px] top-2 shadow-[0_0_10px_rgba(167,255,64,0.7)] group-hover:shadow-[0_0_15px_rgba(167,255,64,0.9)] transition-all duration-300" />
                </div>
                
                <div className="flex-1 bg-[#1a1a1a]/40 backdrop-blur-sm rounded-xl p-4 
                  border border-[#A7FF40]/10 group-hover:border-[#A7FF40]/30 
                  shadow-[0_0_10px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_15px_rgba(167,255,64,0.1)] 
                  transition-all duration-300">
                  <h3 className="text-white font-semibold mb-2 text-base sm:text-lg">{event.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{event.description}</p>
                  {event.duration && (
                    <p className="text-[#A7FF40]/80 text-xs mt-2 italic">{event.duration}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SectionTransition>
      </div>

      <style jsx>{sectionStyles}</style>
    </section>
  );
};

export default Timeline;
