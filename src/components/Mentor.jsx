import React from 'react';
import { motion } from 'framer-motion';
import bgDevSummit from '../assets/bgDevSummit.png';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const mentors = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Lead",
    image: "https://via.placeholder.com/150",
    expertise: "Machine Learning & Neural Networks",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Alex Rodriguez",
    role: "Blockchain Expert",
    image: "https://via.placeholder.com/150",
    expertise: "Web3 & Smart Contracts",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Priya Sharma",
    role: "Cloud Architect",
    image: "https://via.placeholder.com/150",
    expertise: "Cloud Computing & DevOps",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "James Wilson",
    role: "Security Expert",
    image: "https://via.placeholder.com/150",
    expertise: "Cybersecurity & Encryption",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Lisa Park",
    role: "UX Lead",
    image: "https://via.placeholder.com/150",
    expertise: "User Experience & Design",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  // Add more mentors to create multiple rows
  {
    name: "Michael Chang",
    role: "IoT Specialist",
    image: "https://via.placeholder.com/150",
    expertise: "IoT & Embedded Systems",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Emma Davis",
    role: "Frontend Expert",
    image: "https://via.placeholder.com/150",
    expertise: "Modern Web Development",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Raj Patel",
    role: "Backend Lead",
    image: "https://via.placeholder.com/150",
    expertise: "Scalable Architecture",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Nina Williams",
    role: "Data Scientist",
    image: "https://via.placeholder.com/150",
    expertise: "Big Data & Analytics",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Tom Anderson",
    role: "AR/VR Expert",
    image: "https://via.placeholder.com/150",
    expertise: "Extended Reality",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

// Split mentors into rows of 5 each
const rows = [
  mentors.slice(0, 5),
  mentors.slice(5, 10)
];

function Mentor() {
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

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-[#1a1a1a] rounded-xl p-10 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300">
            <div className="w-24 h-24 mx-auto mb-6 bg-black rounded-full flex items-center justify-center border border-[#A7FF40]/10">
              <svg 
                className="w-12 h-12 text-[#A7FF40]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-[#A7FF40] mb-4">Coming Soon!</h3>
            <p className="text-gray-300 text-lg">
              Our expert mentors will be announced shortly. Stay tuned for updates on industry leaders who will guide you through your hackathon journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Mentor;