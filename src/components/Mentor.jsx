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
  const mentorTypes = [
    {
      role: "AI & ML Expert",
      description: "Coming Soon",
      icon: (
        <svg className="w-12 h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      role: "Web3 Specialist",
      description: "Coming Soon",
      icon: (
        <svg className="w-12 h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      role: "Cloud Architect",
      description: "Coming Soon",
      icon: (
        <svg className="w-12 h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      role: "Security Expert",
      description: "Coming Soon",
      icon: (
        <svg className="w-12 h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      role: "UI/UX Designer",
      description: "Coming Soon",
      icon: (
        <svg className="w-12 h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      role: "Full Stack Developer",
      description: "Coming Soon",
      icon: (
        <svg className="w-12 h-12 text-[#A7FF40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

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

export default Mentor;