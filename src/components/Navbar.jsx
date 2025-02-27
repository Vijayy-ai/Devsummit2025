import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/components/navbar.css";
import { Link } from "react-router-dom";
import devsummitLogo from "../assets/devsummit-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "themes", label: "Themes" },
    { id: "timeline", label: "Timeline" },
    { id: "prizes", label: "Prizes" },
    { id: "mentors", label: "Mentors" },
    { id: "team", label: "Team" },
    { id: "faculty", label: "Faculty" },
    { id: "sponsors", label: "Sponsors" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-3 sm:py-4'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div 
          className={`relative flex items-center justify-between px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
            isScrolled ? 'bg-[#1a1a1a]/80' : 'bg-[#1a1a1a]/90'
          } backdrop-blur-sm border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(167,255,64,0.15)]`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src={devsummitLogo}
              alt="DevSummit Logo"
              className="h-8 w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 p-2 hover:bg-[#A7FF40]/10 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 relative flex items-center justify-center">
              <span className={`absolute h-0.5 w-full bg-[#A7FF40] transform transition-all duration-300 ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}></span>
              <span className={`absolute h-0.5 w-full bg-[#A7FF40] transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute h-0.5 w-full bg-[#A7FF40] transform transition-all duration-300 ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}></span>
            </div>
          </motion.button>

          {/* Navigation Links */}
          <AnimatePresence>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute md:relative top-full left-0 w-full md:w-auto 
                md:flex md:items-center md:space-x-1 lg:space-x-2 
                ${isScrolled ? 'bg-[#1a1a1a]/80' : 'bg-[#1a1a1a]/95'} md:bg-transparent backdrop-blur-md md:backdrop-blur-none
                transform transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-y-2 opacity-100 visible' : 'translate-y-[-10px] md:translate-y-0 opacity-0 md:opacity-100 invisible md:visible'}
                rounded-2xl md:rounded-none mt-2 md:mt-0 p-3 sm:p-4 md:p-0 border border-[#A7FF40]/20 md:border-0`}
            >
              {navItems.map(({ id, label }) => (
                <motion.button
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(id)}
                  className={`block md:inline-block w-full md:w-auto px-3 sm:px-4 py-2 rounded-full text-sm lg:text-base
                    transition-all duration-300 hover:bg-[#A7FF40]/10
                    ${activeSection === id ? 'text-[#A7FF40] bg-[#A7FF40]/10 font-medium shadow-[0_0_10px_rgba(167,255,64,0.2)]' : 'text-gray-300 hover:text-[#A7FF40]'}
                    ${isOpen ? 'text-center mb-1 last:mb-0' : ''}`}
                >
                  {label}
                </motion.button>
              ))}

              {/* Mobile Register Button */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.hackquest.io/hackathons/DevSummit-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden block w-full text-center mt-3 px-4 py-2 bg-gradient-to-r from-[#A7FF40] to-[#65D000] text-black rounded-full
                text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(167,255,64,0.3)]">
                Register
              </motion.a>
            </motion.div>
          </AnimatePresence>

          {/* Desktop Register Button */}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.hackquest.io/hackathons/DevSummit-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex h-8 sm:h-10 px-4 sm:px-6 bg-gradient-to-r from-[#A7FF40] to-[#65D000] text-black rounded-full items-center
            text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(167,255,64,0.3)]">
            Register
          </motion.a>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
