import React, { useRef } from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import vijayImage from "../assets/team/vijay.jpeg";
import yajvendraImage from "../assets/team/yajvendra.jpeg";
import rammImage from "../assets/team/ramm.jpeg";
import rahulImage from "../assets/team/rahul.jpeg";
import satyamImage from "../assets/team/satyam.jpeg";
import rishabhImage from "../assets/team/rishabh.jpg";
import anshuImage from "../assets/team/anshu.jpg";
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
    image: rammImage,
    bio: "Developer with modern tech expertise",
    socials: {
      linkedin: "https://www.linkedin.com/in/rambhajan-saini/",
      github: "https://github.com/rambhajanmali",
      twitter: "https://x.com/ramm0x"
    }
  },
  {
    name: "Anshu Priya",
    role: "Lead Organizer",
    image: anshuImage,
    bio: "Full-stack developer & community builder passionate about tech innovation",
    socials: {
      linkedin: "https://www.linkedin.com/in/anshu-priya06/",
      github: "https://github.com/anshupriya06",
      twitter: "https://x.com/Anshu__Priya"
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
      twitter: "#"
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
      twitter: "https://x.com/SatyamJha165686"
    }
  },
  {
    name: "Rishabh",
    role: "content & design lead",
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
            hover:scale-110 transition-transform duration-300 whitespace-nowrap max-w-[150px] truncate"
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
