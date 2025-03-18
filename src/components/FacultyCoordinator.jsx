import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  fadeInUp,
  staggerContainer,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";
import OpSir from "../assets/faculty/op sir.jpeg"; // Add your image path
import HukumSir from "../assets/faculty/hukum sir.jpg"; // Add your image path
import SudhanshuSir from "../assets/faculty/sudhanshu sir.jpeg"; // Add your image path

const facultyCoordinators = [
  {
    name: "Dr. Om Prakash Sharma",
    image: OpSir,
    designation: "Dean Faculty of Engineering & Technology",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Dr. Hukum Saini",
    image: HukumSir,
    designation: "Associate Professor, Department of Computer Science",
    socials: {
      linkedin: "https://www.linkedin.com/in/dr-hukum-saini-38357852/",
      twitter: "#"
    }
  },
  {
    name: "Mr. Sudhanshu Vashistha",
    image: SudhanshuSir,
    designation: "Assistant Professor, Department of Computer Science",
    socials: {
      linkedin: "https://www.linkedin.com/in/sudhanshu-vashistha-728a0556/",
      twitter: "#"
    }
  }
  // Add more faculty coordinators as needed
];

const FacultyCard = ({ faculty }) => (
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
            src={faculty.image}
            alt={faculty.name}
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>
      <motion.h3 
        className="text-lg sm:text-xl font-bold text-white mb-2 text-center"
        variants={fadeInUp}
      >
        {faculty.name}
      </motion.h3>
      <motion.p 
        className="text-gray-300 text-xs sm:text-sm mb-4 text-center h-12 sm:h-14 line-clamp-2"
        variants={fadeInUp}
      >
        {faculty.designation}
      </motion.p>
    </div>
  </motion.div>
);

const FacultyCoordinator = () => {
  return (
    <section id="faculty" className="relative py-16 sm:py-20 px-4 overflow-hidden bg-black">
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
              Faculties
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-center mb-12 sm:mb-16"
            variants={fadeInUp}
          >
            Meet our esteemed faculty members guiding DevSummit
          </motion.p>
        </SectionTransition>

        {/* Faculty Cards Container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto">
            {facultyCoordinators.map((faculty) => (
              <div key={faculty.name} className="flex justify-center">
                <FacultyCard faculty={faculty} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default FacultyCoordinator; 