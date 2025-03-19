import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import bgDevSummit from '../assets/bgDevSummit.png';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import amitChandra from '../assets/mentors/Amit Chandra.jpeg';
import vilsijain from '../assets/mentors/vilsi jain.jpg';
import HarshitSharma from '../assets/mentors/Harshit Sharma.jpeg';
import Kartikey from '../assets/mentors/kartikey.jpg';
import pradeepJha from '../assets/mentors/pradeep jha.jpg';
import vikashBajpai from '../assets/mentors/vikash bajpai.jpg';
import shubhamGupta from '../assets/mentors/shubham gupta.jpg';
import AdityaSoni from '../assets/mentors/Aditya soni.jpg';
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
    bio: "Leading Blockchain Initiative for Govt of Rajasthan, India  ",
    socials: {
      linkedin: "https://www.linkedin.com/in/amitchandra13/",
      twitter: "#"
    }
  },
  {
    name: "Vilsi Jain",
    role: "Software Engineer | Google WTM Ambassador ",
    image: vilsijain,
    bio: "Software Engineer | Google WTM Ambassador | Flutter Jaipur",
    socials: {
      linkedin: "https://www.linkedin.com/in/vilsijain/",
      twitter: "https://x.com/VilsiJain"
    }
  },
  {
    name: "Harshit Sharma",
    role: "Software Engineer 2 @ Google",
    image: HarshitSharma,
    bio: "Software Engineer 2 @ Google • Ex-Amazon",
    socials: {
      linkedin: "https://www.linkedin.com/in/you-know-who/",
      twitter: "#"
    }
  },
  {
    name: "Kartikey Garg",
    role: "Developer Ecosystem Growth at HackQuest",
    image: Kartikey,
    bio: "Developer Ecosystem Growth at HackQuest",
    socials: {
      linkedin: "https://www.linkedin.com/in/geekykartikey/",
      twitter: "https://x.com/geeky_kartikey"
    }
  },
  {
    name: "Dr. Pradeep Jha ",
    role: "Salesforce Trainer & 2X Salesforce Certified",
    image: pradeepJha,
    bio: "Salesforce Trainer & 2X Salesforce Certified",
    socials: {
      linkedin: "https://www.linkedin.com/in/pradeepjha1988/",
      twitter: "#"
    }
  },
  {
    name: "Shubham Gupta",
    role: "Team Lead Nagarro ",
    image: shubhamGupta ,
    bio: "Team Lead Nagarro ",
    socials: {
      linkedin: "https://www.linkedin.com/in/shubhamguptag/",
      twitter: "#"
    }
  },
  {
    name: "Aditya Soni",
    role: "DevOps Engineer II, Forrester Research CNCF Ambassador ",
    image: AdityaSoni,
    bio: "DevOps Engineer II, Forrester Research CNCF Ambassador",
    socials: {
      linkedin: "https://www.linkedin.com/in/adityasonittyl/",
      twitter: "https://x.com/adityasonittyl"
    }
  },
  // {
  //   name: "Priyanshu",
  //   role: "Head of Ecosystem & Integration @ Pushchain ",
  //   // image: HarshitSharma,
  //   bio: "Head of Ecosystem & Integration @ Pushchain",
  //   socials: {
  //     linkedin: "https://www.linkedin.com/in/shubhamguptag/",
  //     twitter: "#"
  //   }
  // },
  {
    name: "Vikas Bajpai",
    role: "Lead, Google Developers Group",
    image: vikashBajpai,
    bio: "Lead, Google Developers Group",
    socials: {
      linkedin: "https://www.linkedin.com/in/vikas-bajpai-6047605/",
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
          className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden 
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
        {mentor.socials.twitter !== "#" && (
          <motion.a 
            whileHover={{ scale: 1.2, y: -2 }}
            href={mentor.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
          >
            <FaTwitter size={18} />
          </motion.a>
        )}
      </div>
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
            Mentors &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
               Judges
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
                {/* Duplicate set for seamless loop */}
                {mentors.map((mentor) => (
                  <MentorCard key={`second-${mentor.name}`} mentor={mentor} />
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