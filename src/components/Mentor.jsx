import React from 'react';
import { motion } from 'framer-motion';
import bgDevSummit from '../assets/bgDevSummit.png';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import amitChandra from '../assets/mentors/Amit Chandra.jpeg';
import abhimanyu from '../assets/mentors/abhimanyu.jpeg';
import niharika from '../assets/mentors/Niharika.jpeg';

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
  }
];

const MentorCard = ({ mentor }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="inline-block flex-shrink-0 w-72 sm:w-80 bg-[#1a1a1a] rounded-xl p-6 sm:p-8 
      border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
      shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] 
      transition-all duration-300"
  >
    <div className="relative mb-4">
      <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden 
        bg-black p-1 border border-[#A7FF40]/10"
      >
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
        bg-[#1a1a1a] text-[#A7FF40] text-xs px-3 sm:px-4 py-1 sm:py-1.5 
        rounded-full font-medium border border-[#A7FF40]/40"
      >
        {mentor.role}
      </div>
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">{mentor.name}</h3>
    <p className="text-gray-300 text-xs sm:text-sm mb-4 text-center h-12 sm:h-[60px] line-clamp-3">{mentor.bio}</p>
    <div className="flex justify-center space-x-4">
      <motion.a 
        whileHover={{ scale: 1.2 }}
        href={mentor.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
      >
        <FaLinkedin size={18} />
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.2 }}
        href={mentor.socials.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
      >
        <FaTwitter size={18} />
      </motion.a>
    </div>
  </motion.div>
);

const ComingSoonCard = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="inline-block flex-shrink-0 w-72 sm:w-80 bg-[#1a1a1a] rounded-xl p-6 sm:p-8 
      border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
      shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] 
      transition-all duration-300"
  >
    <div className="relative mb-4">
      <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden 
        bg-black p-1 border border-[#A7FF40]/10 flex items-center justify-center"
      >
        <svg className="w-8 h-8 sm:w-12 sm:h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
        bg-[#1a1a1a] text-[#A7FF40] text-xs px-3 sm:px-4 py-1 sm:py-1.5 
        rounded-full font-medium border border-[#A7FF40]/40"
      >
        Coming Soon
      </div>
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">Revealing Soon</h3>
    <p className="text-gray-300 text-xs sm:text-sm mb-4 text-center h-12 sm:h-[60px]">
      Stay tuned for more amazing mentors joining our team!
    </p>
  </motion.div>
);

const Mentor = () => {
  return (
    <section id="mentors" className="relative py-16 sm:py-20 bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
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
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-white">
            Meet Our Expert Mentors
          </h2>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-2xl mx-auto px-4">
            Learn from industry leaders who will guide you throughout the hackathon
          </p>
        </motion.div>

        <div className="space-y-16">
          <div className="overflow-hidden relative w-screen -mx-4">
            <div 
              className="flex gap-4 sm:gap-6 animate-scroll whitespace-nowrap"
              style={{
                animationDuration: '40s',
                paddingLeft: '1rem'
              }}
            >
              {/* First set of cards */}
              {mentors.map((mentor, index) => (
                <MentorCard key={`first-${index}`} mentor={mentor} />
              ))}
              {[1, 2].map((_, index) => (
                <ComingSoonCard key={`coming-soon-${index}`} />
              ))}
              {/* Duplicate set for seamless loop */}
              {mentors.map((mentor, index) => (
                <MentorCard key={`second-${index}`} mentor={mentor} />
              ))}
              {[1, 2].map((_, index) => (
                <ComingSoonCard key={`duplicate-coming-soon-${index}`} />
              ))}
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
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.75rem)); }
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 1s infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default Mentor;