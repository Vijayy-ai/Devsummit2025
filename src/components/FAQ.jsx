import React, { useState } from "react";
import bgDevSummit from "../assets/bgDevSummit.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is DevSummit Hackathon?",
      answer: "DevSummit Hackathon is an exciting coding competition where developers come together to create innovative solutions within a limited time frame. It's a platform for learning, collaboration, and showcasing your technical skills."
    },
    {
      question: "Who can participate?",
      answer: "The hackathon is open to students, professionals, and coding enthusiasts. Whether you're a beginner or an experienced developer, everyone is welcome to participate and learn."
    },
    {
      question: "How do I register?",
      answer: "Registration is simple! Click on the 'Register Now' button at the top of the page and fill out the registration form. Make sure to join our Discord community for updates and announcements."
    },
    {
      question: "What are the prizes?",
      answer: "We have exciting prizes for winners including cash rewards, sponsored products, mentorship opportunities, and more. Check out our Prizes section for detailed information."
    },
    {
      question: "Can I participate as a team?",
      answer: "Yes! You can participate either individually or as a team of up to 4 members. We encourage collaboration and team participation."
    },
    {
      question: "What if I don't have a team?",
      answer: "Don't worry! You can join our Discord community where you'll find other participants looking for team members. We'll also have team formation events before the hackathon."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      <div className="container relative z-10 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#1a1a1a]/60"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl font-semibold text-white group-hover:text-[#A7FF40] transition-colors">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 text-[#A7FF40] ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-300 text-lg">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
