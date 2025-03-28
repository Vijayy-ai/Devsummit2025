import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  sectionStyles,
  SectionTransition,
  FloatingParticles
} from "../utils/animations";

const AboutUs = () => {
  const features = [
    {
      title: "Innovation",
      description: "Push boundaries and create groundbreaking solutions",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "Work with talented developers from around the globe",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Learning",
      description: "Gain valuable experience and expand your skillset",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  const stats = [
    { label: "Participants", value: "300+" },
    { label: "Projects", value: "70+" },
    { label: "Mentors", value: "20+" },
    { label: "Prize Pool", value: "₹15 Lakh" }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4">
        <SectionTransition className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white"
            variants={fadeInUp}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7FF40] to-[#65D000]">
              DevSummit
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Join us for an extraordinary journey of innovation, learning, and collaboration
          </motion.p>
        </SectionTransition>

        {/* Features Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto mb-16 sm:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                transition-all duration-300 flex flex-col items-center text-center h-full
                backdrop-blur-sm bg-opacity-50"
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black/50 p-3 
                  border border-[#A7FF40]/20 flex items-center justify-center mb-5 sm:mb-6
                  group-hover:border-[#A7FF40]/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center text-[#A7FF40]">
                  {feature.icon}
                </div>
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#A7FF40] mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] rounded-xl p-4 sm:p-6 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)] 
                transition-all duration-300 text-center backdrop-blur-sm bg-opacity-50"
            >
              <motion.div 
                className="text-xl sm:text-2xl lg:text-3xl font-black text-[#A7FF40] mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{sectionStyles}</style>
    </section>
  );
};

export default AboutUs;