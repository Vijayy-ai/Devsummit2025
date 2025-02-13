import React from 'react';
import { motion } from 'framer-motion';
import bgDevSummit from '../assets/bgDevSummit.png';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import amit from '../assets/mentors/Amit Chandra.jpeg';
// import abhimanyu from '../assets/mentors/abhimanyu.jpg';
// import priya from '../assets/mentors/priya.jpg';
// import james from '../assets/mentors/james.jpg';

const mentors = [
  {
    name: "Amit Chandra",
    role: "Blockchain Advisor",
    image: amit,
    expertise: "Blockchain Advisor @ EY | Leading Blockchain Initiative for Govt of Rajasthan, India | Empowering 200+ Govt Officials, 300+ Faculties, 400+ Students & Startups | Strategic Advisor: LF Decentralized Trust & NOBSAA |",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Abhimanyu Shekhawat",
    role: "Blockchain Expert",
    // image: abhimanyu,
    expertise: "Web3 & Smart Contracts Expert with extensive experience in blockchain development and smart contract implementation. Leading innovative projects in the DeFi space.",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Priya Sharma",
    role: "Cloud Architect",
    // image: priya,
    expertise: "Cloud Computing & DevOps specialist with expertise in AWS, Azure, and Google Cloud. Experienced in implementing scalable cloud solutions and CI/CD pipelines.",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "James Wilson",
    role: "Security Expert",
    // image: james,
    expertise: "Cybersecurity & Encryption expert specializing in application security, penetration testing, and secure system design. Leading security initiatives for enterprise applications.",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  // {
  //   name: "Lisa Park",
  //   role: "UX Lead",
  //   image: "https://via.placeholder.com/150",
  //   expertise: "User Experience & Design",
  //   socials: {
  //     linkedin: "#",
  //     github: "#",
  //     twitter: "#"
  //   }
  // },
  // Add more mentors to create multiple rows
  // {
  //   name: "Michael Chang",
  //   role: "IoT Specialist",
  //   image: "https://via.placeholder.com/150",
  //   expertise: "IoT & Embedded Systems",
  //   socials: {
  //     linkedin: "#",
  //     github: "#",
  //     twitter: "#"
  //   }
  // },
  // {
  //   name: "Emma Davis",
  //   role: "Frontend Expert",
  //   image: "https://via.placeholder.com/150",
  //   expertise: "Modern Web Development",
  //   socials: {
  //     linkedin: "#",
  //     github: "#",
  //     twitter: "#"
  //   }
  // },
  // {
  //   name: "Raj Patel",
  //   role: "Backend Lead",
  //   image: "https://via.placeholder.com/150",
  //   expertise: "Scalable Architecture",
  //   socials: {
  //     linkedin: "#",
  //     github: "#",
  //     twitter: "#"
  //   }
  // },
  // {
  //   name: "Nina Williams",
  //   role: "Data Scientist",
  //   image: "https://via.placeholder.com/150",
  //   expertise: "Big Data & Analytics",
  //   socials: {
  //     linkedin: "#",
  //     github: "#",
  //     twitter: "#"
  //   }
  // },
  // {
  //   name: "Tom Anderson",
  //   role: "AR/VR Expert",
  //   image: "https://via.placeholder.com/150",
  //   expertise: "Extended Reality",
  //   socials: {
  //     linkedin: "#",
  //     github: "#",
  //     twitter: "#"
  //   }
  // }
];

// Split mentors into rows of 5 each
const rows = [
  mentors.slice(0, 5),
  mentors.slice(5, 10)
];

const Mentor = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-black">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white">
            Meet Our Expert Mentors
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Learn from industry leaders who will guide you throughout the hackathon
          </p>
        </motion.div>

        <div className="space-y-16">
          <div className="overflow-hidden relative w-screen -mx-4">
            <div 
              className="flex gap-6 animate-scroll whitespace-nowrap"
              style={{
                animationDuration: '40s',
                paddingLeft: '1rem'
              }}
            >
              {/* First set of mentor cards */}
              {mentors.map((mentor, index) => (
                <motion.div
                  key={`first-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block flex-shrink-0 w-80 bg-[#1a1a1a] rounded-xl p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300"
                >
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-black p-1 border border-[#A7FF40]/10">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-[#A7FF40] text-xs px-4 py-1.5 rounded-full font-medium border border-[#A7FF40]/40">
                      {mentor.role}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center truncate">{mentor.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center min-h-[4.5rem] overflow-y-auto">
                    {mentor.expertise}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={mentor.socials.linkedin} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={mentor.socials.github} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={mentor.socials.twitter} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaTwitter size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {mentors.map((mentor, index) => (
                <motion.div
                  key={`second-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block flex-shrink-0 w-80 bg-[#1a1a1a] rounded-xl p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300"
                >
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-black p-1 border border-[#A7FF40]/10">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-[#A7FF40] text-xs px-4 py-1.5 rounded-full font-medium border border-[#A7FF40]/40">
                      {mentor.role}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center truncate">{mentor.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center min-h-[4.5rem] overflow-y-auto">
                    {mentor.expertise}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={mentor.socials.linkedin} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={mentor.socials.github} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={mentor.socials.twitter} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaTwitter size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Keep the existing styles section */}
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
      </div>
    </section>
  );
};

export default Mentor;