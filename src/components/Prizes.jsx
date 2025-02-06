import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const Prizes = () => {
  const prizes = [
    {
      rank: "1st Prize",
      amount: "₹50,000",
      benefits: [
        "Cash Prize",
        "DevSummit Trophy",
        "1-Year Premium Subscriptions",
        "Exclusive Mentorship"
      ]
    },
    {
      rank: "2nd Prize",
      amount: "₹30,000",
      benefits: [
        "Cash Prize",
        "DevSummit Medal",
        "6-Month Premium Subscriptions",
        "Industry Connections"
      ]
    },
    {
      rank: "3rd Prize",
      amount: "₹20,000",
      benefits: [
        "Cash Prize",
        "DevSummit Medal",
        "3-Month Premium Subscriptions",
        "Development Resources"
      ]
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
            Prizes & Rewards
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Win amazing prizes and get recognized for your innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.rank}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-3xl p-8 transform transition-all duration-300 group-hover:bg-[#1a1a1a]/60 group-hover:scale-105">
                {/* Prize Rank */}
                <div className="text-[#A7FF40] text-2xl font-bold mb-4">
                  {prize.rank}
                </div>

                {/* Prize Amount */}
                <div className="text-5xl font-bold text-white mb-6">
                  {prize.amount}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#A7FF40]/20 mb-6"></div>

                {/* Benefits */}
                <ul className="space-y-4">
                  {prize.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (benefitIndex * 0.1) }}
                      className="flex items-center text-gray-300"
                    >
                      <svg className="w-5 h-5 text-[#A7FF40] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#A7FF40] to-[#A7FF40]/50 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#A7FF40] mb-4">
              Special Mentions & Category Prizes
            </h3>
            <p className="text-gray-300">
              Additional prizes for Best UI/UX, Most Innovative Solution, Best Use of AI,
              and Community Choice Award. Stay tuned for more details!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
