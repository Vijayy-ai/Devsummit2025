import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Vijay",
    role: "Lead Organizer",
    image: "https://via.placeholder.com/150",
    bio: "Passionate about bringing developers together",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Yajvendra Saini",
    role: "Lead Organizer",
    image: "https://via.placeholder.com/150",
    bio: "Full-stack developer with modern tech expertise",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Rambhajan Mali",
    role: "Lead Organizer",
    image: "https://via.placeholder.com/150",
    bio: "developer with modern tech expertise",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Rahul Kumar Shah",
    role: "Lead Organizer",
    image: "https://via.placeholder.com/150",
    bio: "Managing hackathon operations",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "David Chen",
    role: "Marketing Lead",
    image: "https://via.placeholder.com/150",
    bio: "Spreading the word about DevSummit",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Emily Brown",
    role: "Operations Lead",
    image: "https://via.placeholder.com/150",
    bio: "Managing hackathon operations",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Alex Kumar",
    role: "Technical Lead",
    image: "https://via.placeholder.com/150",
    bio: "Leading technical implementations",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Sophia Lee",
    role: "Content Lead",
    image: "https://via.placeholder.com/150",
    bio: "Creating engaging content",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Ryan Zhang",
    role: "Partnership Lead",
    image: "https://via.placeholder.com/150",
    bio: "Managing strategic partnerships",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Maya Patel",
    role: "Event Coordinator",
    image: "https://via.placeholder.com/150",
    bio: "Coordinating event logistics",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

const Team = () => {
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
            Meet Our Team
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            The amazing people behind DevSummit Hackathon
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
              {/* First set of cards */}
              {teamMembers.map((member, index) => (
                <motion.div
                  key={`first-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block flex-shrink-0 w-80 bg-[#1a1a1a] rounded-xl p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300"
                >
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-black p-1 border border-[#A7FF40]/10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-[#A7FF40] text-xs px-4 py-1.5 rounded-full font-medium border border-[#A7FF40]/40">
                      {member.role}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center truncate">{member.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center h-10 line-clamp-2">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={member.socials.linkedin} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={member.socials.github} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={member.socials.twitter} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaTwitter size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {teamMembers.map((member, index) => (
                <motion.div
                  key={`second-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block flex-shrink-0 w-80 bg-[#1a1a1a] rounded-xl p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300"
                >
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-black p-1 border border-[#A7FF40]/10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-[#A7FF40] text-xs px-4 py-1.5 rounded-full font-medium border border-[#A7FF40]/40">
                      {member.role}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center truncate">{member.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center h-10 line-clamp-2">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={member.socials.linkedin} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={member.socials.github} 
                      className="text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      href={member.socials.twitter} 
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

        {/* Join the Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 px-4"
        >
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#A7FF40] mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6">
              We're always looking for passionate individuals to join our team.
              If you're interested in helping organize future events, reach out to us!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-[#1a1a1a] text-[#A7FF40] border-2 border-[#A7FF40] rounded-full font-semibold hover:bg-[#A7FF40] hover:text-black transition-all duration-300"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
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

export default Team;
