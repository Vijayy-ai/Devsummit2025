import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const Map = () => {
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
            Find Us Here
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Join us at our venue for an amazing hackathon experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-8 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#A7FF40] mb-4">
                  Venue Location
                </h3>
                <p className="text-gray-300">
                  Tech Innovation Center<br />
                  123 Developer Street<br />
                  Innovation District<br />
                  Tech City, TC 12345
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#A7FF40] mb-4">
                  Getting Here
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 mt-1 text-[#A7FF40]">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold text-white">By Car:</span><br />
                      Parking available at the venue
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 mt-1 text-[#A7FF40]">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold text-white">By Train:</span><br />
                      5 minutes walk from Central Station
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 mt-1 text-[#A7FF40]">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold text-white">By Bus:</span><br />
                      Bus stops: 42, 67, 89 nearby
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#A7FF40] mb-4">
                  Need Help?
                </h3>
                <p className="text-gray-300 mb-4">
                  Having trouble finding us? Contact our support team:
                </p>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center text-[#A7FF40] hover:text-[#A7FF40]/80 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden">
              <iframe
                title="Venue Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.985!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCc0OC4wIk4gNzPCsDU5JzA2LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
