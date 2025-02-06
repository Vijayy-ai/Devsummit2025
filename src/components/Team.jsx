import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Rahul badmoshhhh",
      role: "Lead Organizer",
      image: "https://via.placeholder.com/150",
      bio: "Passionate about bringing developers together and fostering innovation",
      socials: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Jane Smith",
      role: "Technical Lead",
      image: "https://via.placeholder.com/150",
      bio: "Full-stack developer with expertise in modern web technologies",
      socials: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Mike Johnson",
      role: "Design Lead",
      image: "https://via.placeholder.com/150",
      bio: "UI/UX designer focused on creating beautiful user experiences",
      socials: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Wilson",
      role: "Community Manager",
      image: "https://via.placeholder.com/150",
      bio: "Building and nurturing the DevSummit community",
      socials: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
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
      <div className="container relative z-10 mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-300 group-hover:bg-[#1a1a1a]/60 group-hover:scale-105">
                {/* Member Image */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#A7FF40]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-[#A7FF40] text-sm mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-6">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.socials.linkedin}
                      className="text-gray-400 hover:text-[#A7FF40] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={member.socials.github}
                      className="text-gray-400 hover:text-[#A7FF40] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="text-gray-400 hover:text-[#A7FF40] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#A7FF40] to-[#A7FF40]/50 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#A7FF40] mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6">
              We're always looking for passionate individuals to join our team.
              If you're interested in helping organize future events, reach out to us!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-[#A7FF40] text-black rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
