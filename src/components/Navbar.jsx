import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/navbar.css";

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
      const offset = 80; // Height of the fixed navbar
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
    { id: "sponsors", label: "Sponsors" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-3 sm:py-4'
    }`}>
      <div className="container mx-auto px-3 sm:px-4">
        <div className={`relative flex items-center justify-between px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-[#1a1a1a]/80' : 'bg-[#1a1a1a]/90'
        } backdrop-blur-sm border border-[#A7FF40]/10`}>
          {/* Logo */}
          <div onClick={() => scrollToSection("home")} className="relative z-10 cursor-pointer">
            <div className="h-8 w-8 sm:h-10 sm:w-10 bg-[#A7FF40] rounded-full transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <span className="text-black font-bold text-xs sm:text-sm">DS</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 p-2 hover:bg-[#A7FF40]/10 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
              <span className={`absolute h-0.5 w-full bg-[#A7FF40] transform transition-all duration-300 ${
                isOpen ? 'rotate-45 top-2' : 'top-1'
              }`}></span>
              <span className={`absolute h-0.5 w-full bg-[#A7FF40] top-2 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute h-0.5 w-full bg-[#A7FF40] transform transition-all duration-300 ${
                isOpen ? '-rotate-45 top-2' : 'top-3'
              }`}></span>
            </div>
          </button>

          {/* Navigation Links */}
          <div className={`absolute md:relative top-full left-0 w-full md:w-auto 
            md:flex md:items-center md:space-x-1 lg:space-x-2 
            ${isScrolled ? 'bg-[#1a1a1a]/80' : 'bg-[#1a1a1a]/95'} md:bg-transparent backdrop-blur-md md:backdrop-blur-none
            transform transition-all duration-300 ease-in-out
            ${isOpen ? 'translate-y-2 opacity-100 visible' : 'translate-y-[-10px] md:translate-y-0 opacity-0 md:opacity-100 invisible md:visible'}
            rounded-2xl md:rounded-none mt-2 md:mt-0 p-3 sm:p-4 md:p-0 border border-[#A7FF40]/10 md:border-0`}>
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block md:inline-block w-full md:w-auto px-3 sm:px-4 py-2 rounded-full text-sm lg:text-base
                  transition-all duration-300 hover:bg-[#A7FF40]/10
                  ${activeSection === id ? 'text-[#A7FF40] bg-[#A7FF40]/10 font-medium' : 'text-gray-300 hover:text-[#A7FF40]'}
                  ${isOpen ? 'text-center mb-1 last:mb-0' : ''}`}
              >
                {label}
              </button>
            ))}

            {/* Mobile Register Button */}
            <a 
              href="YOUR_EXTERNAL_REGISTRATION_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden block w-full text-center mt-3 px-4 py-2 bg-[#A7FF40] text-black rounded-full
              text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Register Now
            </a>
          </div>

          {/* Desktop Register Button */}
          <a 
            href="YOUR_EXTERNAL_REGISTRATION_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex h-8 sm:h-10 px-4 sm:px-6 bg-[#A7FF40] text-black rounded-full items-center
            text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Register Now
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
