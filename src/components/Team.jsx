import React, { useRef } from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import vijayImage from "../assets/team/vijay.jpeg";
import yajvendraImage from "../assets/team/yajvendra.jpeg";
import rahulImage from "../assets/team/rahul.jpeg";
import ramImage from "../assets/team/ramm.jpeg";
import satyamImage from "../assets/team/satyam.jpeg";
import rishabhImage from "../assets/team/rishabh.jpg";
import anshuImage from "../assets/team/anshu.jpg";
import mansiImage from "../assets/team/Mansi (1).jpg";
import pradeetaImage from "../assets/team/pradeepta.jpg";
import aanchalImage from "../assets/team/aanchal.jpg";
import vikashImage from "../assets/team/vikash.jpg";
import chandanImage from "../assets/team/chandan kumar.jpg";
import akashImage from "../assets/team/akash kumawat.png";
import ananyaImage from "../assets/team/ananya.jpg";
import ashishImage from "../assets/team/ashish ranjan.jpg";
import uditImage from "../assets/team/udit ranjan.jpg";
import shahbazImage from "../assets/team/shahbaz.jpg";
import jaydeepImage from "../assets/team/jaydeep.jpg";
import alokImage from "../assets/team/alok.jpg";
import vikaskundiyaImage from "../assets/team/vikash-kundiya.jpg";
import yogeshImage from "../assets/team/yogesh.jpeg";
import kajalImage from "../assets/team/Kajal.jpeg";
import MihirImage from "../assets/team/Mihir.jpeg";
import MuskanImage from "../assets/team/Muskan.jpeg";
import AbhinayImage from "../assets/team/Abhinay.jpeg";
import DeepakImage from "../assets/team/Deepak.jpeg";

import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

// Lead Organizers
const leadOrganizers = [
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
      github: "https://github.com/YajvendraSaini/",
      twitter: "https://x.com/YajvendraSaini"
    }
  },
  {
    name: "Rahul Kumar Shah",
    role: "Lead Organizer",
    image: rahulImage,
    bio: "Managing hackathon operations",
    socials: {
      linkedin: "https://www.linkedin.com/in/rahul-kumar-shah-847199253/",
      github: "#",
      twitter: "#"
    }
  }
];

// Organizers
const organizers = [
  {
    name: "Ram",
    role: "Organizer",
    image: ramImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/rambhajan-saini/",
      github: "https://github.com/rambhajanmali",
      twitter: "https://x.com/ramm0x"
    }
  },
  {
    name: "Satyam Jha",
    role: "Organizer",
    image: satyamImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/satyam-jha2004/",
      github: "https://github.com/Satyam1616",
      twitter: "https://x.com/SatyamJha165686"
    }
  },
  {
    name: "Rishabh",
    role: "Organizer",
    image: rishabhImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/rishabh-amuly07/",
      github: "https://github.com/Rishabh5002",
      twitter: "https://x.com/Rishabh_ig"
    }
  },
  {
    name: "Ananya",
    role: "Organizer",
    image: ananyaImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/ananya-pandey-b9801b239/",
      github: "https://github.com/Ananya10x",
      twitter: "https://x.com/AnanyaPandey05?t=0nChPWrDokhNlvkj-SGlow&s=09"
    }
  },
  {
    name: "Mansi",
    role: "Organizer",
    image: mansiImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/aimansi/",
      github: "#",
      twitter: "https://x.com/Mansi_6921"
    }
  },
  {
    name: "Pradeepta",
    role: "Organizer",
    image: pradeetaImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/pradeepta-bhanja-devsummit%E2%9A%A1-397016293/",
      github: "https://github.com/Pradeepta05/CODSOFT",
      twitter: "https://x.com/PradeeptaB37535?t=UiyuVS5dNLBl-o3pKpFWSQ&s=09"
    }
  },
  {
    name: "Aanchal",
    role: "Organizer",
    image: aanchalImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/aanchal-sharma-420953264/",
      github: "https://github.com/aanchal10x",
      twitter: "https://x.com/Aanchal0X?t=PlWyWtIDRMKKhChXtkhP-g&s=09"
    }
  },
  {
    name: "Anshu Priya",
    role: "Organizer",
    image: anshuImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/anshu-priya06/",
      github: "https://github.com/anshupriya06",
      twitter: "https://x.com/Anshu__Priya"
    }
  },
  {
    name: "Vikas khundia",
    role: "Organizer",
    image: vikaskundiyaImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/vikas-khundia-243205288/",
      github: "#",
      twitter: "https://x.com/KhundiaVik16234?t=3FdI3yFq-1CgPPk8kyM5lQ&s=08"
    }
  },
  {
    name: "Chandan Kumar",
    role: "Organizer",
    image: chandanImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/chandan-kumar-3bb070294/",
      github: "https://github.com/chand10X",
      twitter: "#"
    }
  },
  {
    name: "Akash Kumawat",
    role: "Organizer",
    image: akashImage,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/akash-kumar-kumawat/",
      github: "https://github.com/Akash1000x",
      twitter: "https://x.com/akashkumawatt"
    }
  }
];

// Core Team
const coreTeam = [
  {
    name: "Vikash",
    role: "Core Team",
    image: vikashImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Ashish Ranjan",
    role: "Core Team",
    image: ashishImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Udit Ranjan",
    role: "Core Team",
    image: uditImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Shahbaz",
    role: "Core Team",
    image: shahbazImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Jaydeep",
    role: "Core Team",
    image: jaydeepImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Alok",
    role: "Core Team",
    image: alokImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Kajal",
    role: "Core Team",
    image: kajalImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Abhinay",
    role: "Core Team",
    image: AbhinayImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Muskan",
    role: "Core Team",
    image: MuskanImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Mihir",
    role: "Core Team",
    image: MihirImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Yogesh",
    role: "Core Team",
    image: yogeshImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Deepak Tyagi",
    role: "Core Team",
    image: DeepakImage,
    bio: "",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

const TeamCard = ({ member, isCore }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.03, y: -5 }}
    className="inline-block flex-shrink-0 w-[160px] xs:w-[180px] sm:w-80 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-4 sm:p-8 
      border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
      shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
      transition-all duration-300 relative overflow-hidden group"
  >
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#A7FF40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="relative mb-4">
        <motion.div 
          className={`${member.bio ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-24 h-24 sm:w-32 sm:h-32'} mx-auto rounded-full overflow-hidden 
            bg-black p-1 border border-[#A7FF40]/10 group-hover:border-[#A7FF40]/40
            transition-all duration-300`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
        {!isCore && (
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
        )}
      </div>
      <motion.h3 
        className="text-lg sm:text-xl font-bold text-white mb-2 text-center"
        variants={fadeInUp}
      >
        {member.name}
      </motion.h3>
      {member.bio && (
        <motion.p 
          className="text-gray-300 text-xs sm:text-sm mb-4 text-center h-auto min-h-[40px] line-clamp-3 sm:line-clamp-2"
          variants={fadeInUp}
        >
          {member.bio}
        </motion.p>
      )}
      <div className={`flex justify-center space-x-6 ${!member.bio ? 'mt-6' : ''}`}>
        {member.socials.linkedin !== "#" && (
          <motion.a 
            whileHover={{ scale: 1.2, y: -2 }}
            href={member.socials.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
          >
            <FaLinkedin size={member.bio ? 18 : 22} />
          </motion.a>
        )}
        {member.socials.github !== "#" && (
          <motion.a 
            whileHover={{ scale: 1.2, y: -2 }}
            href={member.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
          >
            <FaGithub size={member.bio ? 18 : 22} />
          </motion.a>
        )}
        {member.socials.twitter !== "#" && (
          <motion.a 
            whileHover={{ scale: 1.2, y: -2 }}
            href={member.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
          >
            <FaTwitter size={member.bio ? 18 : 22} />
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

const TeamSection = ({ title, description, members, isScrolling }) => (
  <div className="mb-20">
    <motion.h3 
      className="text-3xl sm:text-4xl font-bold mb-4 text-center text-white"
      variants={fadeInUp}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
        {title}
      </span>
    </motion.h3>
    <motion.p 
      className="text-gray-300 text-base max-w-2xl mx-auto text-center mb-12"
      variants={fadeInUp}
    >
      {description}
    </motion.p>
    
    {isScrolling ? (
      // Scrolling layout for Core Team
      <div className="overflow-x-hidden relative w-full">
        <motion.div 
          className="flex gap-4 sm:gap-6 animate-scroll pl-4 hover:pause-animation"
          style={{
            animationDuration: '40s'
          }}
        >
          {/* First set of members */}
          {members.map((member) => (
            <TeamCard key={`first-${member.name}`} member={member} isCore={true} />
          ))}
          {/* Duplicate set for seamless loop */}
          {members.map((member) => (
            <TeamCard key={`second-${member.name}`} member={member} isCore={true} />
          ))}
        </motion.div>
      </div>
    ) : (
      // Grid layout for Lead Organizers and Organizers
      <div className="flex justify-center">
        {members.length <= 3 ? (
          // Special layout for Lead Organizers (3 or fewer members)
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 w-full max-w-6xl">
            {members.map((member) => (
              <div key={member.name} className="flex justify-center">
                <TeamCard member={member} isCore={false} />
              </div>
            ))}
          </div>
        ) : (
          // Grid layout for Organizers
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 w-full max-w-7xl mx-auto">
            {members.map((member) => (
              <div key={member.name} className="flex justify-center">
                <TeamCard member={member} isCore={false} />
              </div>
            ))}
          </div>
        )}
      </div>
    )}
  </div>
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
          {/* Lead Organizers Section */}
          <TeamSection 
            title="Lead Organizers" 
            description="Our visionary leaders driving DevSummit forward" 
            members={leadOrganizers} 
            isScrolling={false} 
          />

          {/* Organizers Section */}
          <TeamSection 
            title="Organizers" 
            description="The dedicated team making DevSummit possible" 
            members={organizers} 
            isScrolling={false} 
          />

          {/* Core Team Section */}
          <TeamSection 
            title="Our Team" 
            description="Our technical backbone working behind the scenes" 
            members={coreTeam} 
            isScrolling={true} 
          />
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
