import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import bgDevSummit from '../assets/bgDevSummit.png';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import amitChandra from '../assets/mentors/Amit Chandra.jpeg';
import abhimanyu from '../assets/mentors/abhimanyu.jpeg';
import niharika from '../assets/mentors/Niharika.jpeg';
import RishikaKinger from '../assets/mentors/Rishika Kinger.jpeg';
import HarshitSharma from '../assets/mentors/Harshit Sharma.jpeg';
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

const mentors = [
  {
    name: "Amit Chandra",
    role: "Blockchain Advisor @ EY",
    image: amitChandra,
    bio: "Leading Blockchain Initiative for Govt of Rajasthan, India | Empowering 200+ Govt Officials, 300+ Faculties, 400+ Students & Startups | Strategic Advisor: LF Decentralized Trust & NOBSAA",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Abhimanyu Shekhawat",
    role: "Co-founder Epoch Protocol",
    image: abhimanyu,
    bio: "Co-founder Epoch Protocol | Prev Co-founder Slick Wallet (acquired)",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Niharika",
    role: "Community Lead @Rise In",
    image: niharika,
    bio: "Handling India Community @Rise In | Leading Community Initiatives",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Rishika Kinger",
    role: "SWE  @ Couchbase",
    image: RishikaKinger,
    bio: "SWE @ Couchbase | Prev- Amazon",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Harshit Sharma",
    role: "Software Engineer 2 @ Google",
    image: HarshitSharma,
    bio: "Software Engineer 2 @ Google • Ex-Amazon",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const MentorCard = ({ mentor }) => (
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
          className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden 
            bg-black p-1 border border-[#A7FF40]/10 group-hover:border-[#A7FF40]/40
            transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
        <motion.div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
            bg-[#1a1a1a] text-[#A7FF40] text-xs px-3 sm:px-4 py-1 sm:py-1.5 
            rounded-full font-medium border border-[#A7FF40]/40
            shadow-[0_0_10px_rgba(167,255,64,0.3)]
            hover:scale-110 transition-transform duration-300
            whitespace-nowrap overflow-hidden max-w-[90%] text-center truncate"
          style={{ transformOrigin: 'center' }}
        >
          {mentor.role}
        </motion.div>
      </div>
      <motion.h3 
        className="text-lg sm:text-xl font-bold text-white mb-2 text-center"
        variants={fadeInUp}
      >
        {mentor.name}
      </motion.h3>
      <motion.p 
        className="text-gray-300 text-xs sm:text-sm mb-4 text-center h-12 sm:h-[60px] line-clamp-3"
        variants={fadeInUp}
      >
        {mentor.bio}
      </motion.p>
      <div className="flex justify-center space-x-4">
        <motion.a 
          whileHover={{ scale: 1.2, y: -2 }}
          href={mentor.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
        >
          <FaLinkedin size={18} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.2, y: -2 }}
          href={mentor.socials.twitter}
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

const ComingSoonCard = () => (
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
          className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden 
            bg-black p-1 border border-[#A7FF40]/10 group-hover:border-[#A7FF40]/40 flex items-center justify-center
            transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-8 h-8 sm:w-12 sm:h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </motion.div>
        <motion.div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
            bg-[#1a1a1a] text-[#A7FF40] text-xs px-3 sm:px-4 py-1 sm:py-1.5 
            rounded-full font-medium border border-[#A7FF40]/40
            shadow-[0_0_10px_rgba(167,255,64,0.3)]"
          whileHover={{ scale: 1.1 }}
        >
          Coming Soon
        </motion.div>
      </div>
      <motion.h3 
        className="text-lg sm:text-xl font-bold text-white mb-2 text-center"
        variants={fadeInUp}
      >
        Revealing Soon
      </motion.h3>
      <motion.p 
        className="text-gray-300 text-xs sm:text-sm mb-4 text-center h-12 sm:h-[60px]"
        variants={fadeInUp}
      >
        Stay tuned for more amazing mentors joining our team!
      </motion.p>
    </div>
  </motion.div>
);

const Mentor = () => {
  return (
    <section id="mentors" className="relative py-16 sm:py-20 bg-black overflow-hidden">
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
              Expert Mentors
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-center mb-12 sm:mb-16"
            variants={fadeInUp}
          >
            Learn from industry leaders who will guide you throughout the hackathon
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
                {/* First set of mentors */}
                {mentors.map((mentor) => (
                  <MentorCard key={`first-${mentor.name}`} mentor={mentor} />
                ))}
                {[1, 2].map((_, index) => (
                  <ComingSoonCard key={`first-coming-soon-${index}`} />
                ))}
                {/* Duplicate set for seamless loop */}
                {mentors.map((mentor) => (
                  <MentorCard key={`second-${mentor.name}`} mentor={mentor} />
                ))}
                {[1, 2].map((_, index) => (
                  <ComingSoonCard key={`second-coming-soon-${index}`} />
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

export default Mentor;