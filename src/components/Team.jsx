import React, { useRef } from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import vijayImage from "../assets/team/vijay.jpeg";
import yajvendraImage from "../assets/team/yajvendra.jpeg";
import ramImage from "../assets/team/ram.jpeg";
import rahulImage from "../assets/team/rahul.jpeg";
import satyamImage from "../assets/team/satyam.jpeg";
import rishabhImage from "../assets/team/rishabh.jpg";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

const teamMembers = [
  {
    name: "Vijay",
    role: "Lead Organizer",
    image: vijayImage,
    bio: "Leading DevSummit vision and strategy",
    socials: {
      linkedin: "https://www.linkedin.com/in/vijay-ai/",
      github: "https://github.com/Vijayy-ai",
      twitter: "https://x.com/Vijayy_ai"
    }
  },
  {
    name: "Yajvendra Saini",
    role: "Lead Organizer",
    image: yajvendraImage,
    bio: "Driving community engagement and operations",
    socials: {
      linkedin: "https://www.linkedin.com/in/yajvendrasaini/",
      github: "https://github.com/YAJVEndraSaini/",
      twitter: "https://x.com/YajvendraSaini"
    }
  },
  {
    name: "Rambhajan Saini",
    role: "Lead Organizer",
    image: ramImage,
    bio: "Developer with modern tech expertise",
    socials: {
      linkedin: "https://www.linkedin.com/in/rambhajan-saini/",
      github: "https://github.com/rambhajanmali",
      twitter: "https://x.com/ramm0x"
    }
  },
  {
    name: "Rahul Kumar Shah",
    role: "Lead Organizer",
    image: rahulImage,
    bio: "Managing hackathon operations",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "https://x.com/Rishabh_ig"
    }
  },
  {
    name: "Satyam Jha",
    role: "Marketing Lead",
    image: satyamImage,
    bio: "Spreading the word about DevSummit",
    socials: {
      linkedin: "https://www.linkedin.com/in/satyam-jha2004/",
      github: "https://github.com/Satyam1616",
      twitter: "https://x.com/Rishabh_ig"
    }
  },
  {
    name: "Rishabh",
    role: "Content Lead",
    image: rishabhImage,
    bio: "Creating engaging content",
    socials: {
      linkedin: "https://www.linkedin.com/in/rishabh-amuly07/",
      github: "https://github.com/Rishabh5002",
      twitter: "https://x.com/Rishabh_ig"
    }
  }
];

const TeamCard = ({ member }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.03, y: -5 }}
    className="inline-block flex-shrink-0 w-72 sm:w-80 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 
      border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
      shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
      transition-all duration-300 relative overflow-hidden group"
  >
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="relative mb-4">
        <motion.div 
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden 
            bg-black p-1 border border-[#A7FF40]/10 group-hover:border-[#A7FF40]/40
            transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
        <motion.div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
            bg-[#1a1a1a] text-[#A7FF40] text-xs px-3 sm:px-4 py-1 sm:py-1.5 
            rounded-full font-medium border border-[#A7FF40]/40
            shadow-[0_0_10px_rgba(167,255,64,0.3)]
            hover:scale-110 transition-transform duration-300"
          style={{ transformOrigin: 'center' }}
        >
          {member.role}
        </motion.div>
      </div>
      <motion.h3 
        className="text-lg sm:text-xl font-bold text-white mb-2 text-center truncate"
        variants={fadeInUp}
      >
        {member.name}
      </motion.h3>
      <motion.p 
        className="text-gray-300 text-xs sm:text-sm mb-4 text-center h-8 sm:h-10 line-clamp-2"
        variants={fadeInUp}
      >
        {member.bio}
      </motion.p>
      <div className="flex justify-center space-x-4">
        <motion.a 
          whileHover={{ scale: 1.2, y: -2 }}
          href={member.socials.linkedin}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
        >
          <FaLinkedin size={18} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.2, y: -2 }}
          href={member.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
        >
          <FaGithub size={18} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.2, y: -2 }}
          href={member.socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
        >
          <FaTwitter size={18} />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <section id="team" className="relative py-16 sm:py-20 px-4 overflow-hidden bg-black">
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
      <div className="relative z-10">
        <SectionTransition>
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center text-white"
            variants={fadeInUp}
          >
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              Team
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-center mb-12 sm:mb-16"
            variants={fadeInUp}
          >
            The amazing people behind DevSummit Hackathon
          </motion.p>
        </SectionTransition>

        <div className="space-y-16">
          <div className="relative">
            {/* Cards Container */}
            <div className="overflow-x-hidden relative w-full">
              <motion.div 
                className="flex gap-4 sm:gap-6 animate-scroll pl-4 hover:pause-animation"
                style={{
                  animationDuration: '40s'
                }}
              >
                {/* First set of team members */}
                {teamMembers.map((member) => (
                  <TeamCard key={`first-${member.name}`} member={member} />
                ))}
                {/* Duplicate set for seamless loop */}
                {teamMembers.map((member) => (
                  <TeamCard key={`second-${member.name}`} member={member} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Join the Team CTA */}
        <SectionTransition>
          <motion.div
            variants={fadeInUp}
            className="text-center mt-12 sm:mt-16 px-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 
                border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-[#A7FF40] mb-3 sm:mb-4"
                  variants={fadeInUp}
                >
                  Want to Join Our Team?
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6"
                  variants={fadeInUp}
                >
                  We're always looking for passionate individuals to join our team.
                  If you're interested in helping organize future events, reach out to us!
                </motion.p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 
                    bg-[#1a1a1a] text-[#A7FF40] border-2 border-[#A7FF40] rounded-full font-semibold 
                    hover:bg-[#A7FF40] hover:text-black transition-all duration-300
                    text-sm sm:text-base relative overflow-hidden group"
                  style={{
                    boxShadow: "0 0 10px rgba(167,255,64,0.6), 0 0 20px rgba(167,255,64,0.4)",
                  }}
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white" />
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </SectionTransition>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll linear infinite;
          min-width: max-content;
          will-change: transform;
        }

        .pause-animation {
          animation-play-state: paused;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animated-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(167, 255, 64, 0.1) 0%, transparent 50%);
          opacity: 0.5;
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Team;
