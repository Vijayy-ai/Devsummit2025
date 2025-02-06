import React from "react";
import bgImage from "../assets/bgDevSummit.png";
import X from "../assets/X.png"
import Facebook from "../assets/facebook.png"
import Linkedin from "../assets/Linkedin.png"
import Github from "../assets/github.png"
import Instagram from "../assets/Instagram.jpeg"
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
      <div className="container mx-auto flex text-center items-center justify-around">
        <div className="mb-6">
          <h3 className="text-5xl font-semibold text-discord-green">
            DevSummit
          </h3>
          <p className="text-md relative top-4">
            The ultimate hackathon event to bring together innovators and
            creators.
          </p>

          {/* Term and Condition  */}
          <div className="text-md mb-6 relative top-5">
            <a href="/terms" className="text-white hover:text-blue-300">
              Terms & Conditions
            </a>{" "}
            |
            <a href="/privacy" className="text-white hover:text-blue-300">
              {" "}
              Privacy Policy
            </a>
      </div>

          <div className="text-md relative top-7">
            <p>
              &copy; {new Date().getFullYear()} DevSummit. All rights reserved.
          </p>
          </div>
        </div>
        {/* Social Media  */}
        <div className="social">
          <div className="main flex h-20 w-[30rem] items-center justify-around ">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img
                src={Facebook}

                alt="Facebook"
                className="w-10 h-10 rounded-full"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img src={X} alt="Twitter" className="h-10 w-10  rounded-full" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="w-10 h-10 rounded-full"
              />
            </a>
              <a
              href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              className="mx-2"
              >
                <img
                src={Linkedin}
                alt="LinkedIn"
                className="w-10 h-10"
                />
              </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img src={Github} alt="GitHub" className="w-10 h-10 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
