import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const AboutUs = () => {
  const features = [
    {
      title: "24-Hour Innovation",
      description: "A full day of coding, creating, and pushing boundaries",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals and tech leaders",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Amazing Prizes",
      description: "Win cash prizes, swag, and opportunities worth ₹1,00,000+",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Networking",
      description: "Connect with like-minded developers and industry leaders",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "500+", label: "Participants" },
    { value: "48", label: "Hours" },
    { value: "₹1L+", label: "in Prizes" },
    { value: "20+", label: "Mentors" },
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
            About DevSummit
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Join us for an exciting 24-hour journey of innovation, learning, and collaboration.
            DevSummit brings together the brightest minds to create amazing solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-6 text-center transform transition-all duration-300 hover:bg-[#1a1a1a]/60 hover:scale-105"
            >
              <div className="text-4xl font-bold text-[#A7FF40] mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-300 group-hover:bg-[#1a1a1a]/60 group-hover:scale-105">
                <div className="w-12 h-12 bg-[#A7FF40]/20 rounded-xl flex items-center justify-center mb-6 text-[#A7FF40] group-hover:bg-[#A7FF40]/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>

                {/* Hover Effect Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#A7FF40] to-[#A7FF40]/50 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#A7FF40] mb-4">
              Ready to Join the Challenge?
            </h3>
            <p className="text-gray-300 mb-6">
              Don't miss this opportunity to showcase your skills, learn from experts,
              and win amazing prizes. Register now for DevSummit Hackathon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                className="inline-flex items-center px-8 py-3 bg-[#A7FF40] text-black rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Register Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border-2 border-[#A7FF40] text-[#A7FF40] rounded-full font-semibold hover:bg-[#A7FF40]/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
