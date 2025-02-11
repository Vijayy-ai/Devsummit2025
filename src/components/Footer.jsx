import React from "react";
import bgImage from "../assets/bgDevSummit.png";
import X from "../assets/X.png"
import Linkedin from "../assets/Linkedin.png"
import Instagram from "../assets/Instagram.png"

function Footer() {
  return (
    <footer
      className="footer text-white py-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-discord-green">
            DevSummit
          </h3>
          <p className="text-sm md:text-md mt-4 max-w-md mx-auto md:mx-0">
            The ultimate hackathon event to bring together innovators and
            creators.
          </p>

          {/* Term and Condition */}
          <div className="text-sm md:text-md mt-5 space-x-2">
            <a href="/terms" className="text-white hover:text-blue-300">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="/privacy" className="text-white hover:text-blue-300">
              Privacy Policy
            </a>
          </div>

          <div className="text-sm md:text-md mt-7">
            <p>
              &copy; {new Date().getFullYear()} DevSummit. All rights reserved.
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="social w-full md:w-auto">
          <div className="main flex justify-center md:justify-around items-center gap-4 md:gap-6 w-full md:w-[30rem]">
            <a
              href="https://x.com/devsummit2025"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <img 
                src={X} 
                alt="Twitter" 
                className="h-8 border border-white w-8 md:h-10 md:w-10 rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com/devsummit2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="h-8 w-8 md:h-10 md:w-10 rounded-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/dev-summit-hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <img
                src={Linkedin}
                alt="LinkedIn"
                className="h-8 w-8 md:h-10 md:w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
