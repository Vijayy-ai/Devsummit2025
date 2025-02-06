import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Mentors from "./components/Mentor";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CountdownTimer from "./components/CountdownTimer";
import CommunityPartnership from "./components/CommunityPartnership";
import ContactUs from "./components/ContactUs";
import HackathonThemes from "./components/HackathonThemes";
import { HACKATHON_DETAILS } from "./utils/constants";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

function App() {
  useIntersectionObserver();

  return (
    <Router>
      <div className="App bg-[#1a1a1a] min-h-screen overflow-hidden">
        <Navbar />
        <Header />
        <CountdownTimer targetDate={HACKATHON_DETAILS.date} />
        <div id="about" className="section">
          <AboutUs />
        </div>
        <div id="themes" className="section">
          <HackathonThemes />
        </div>
        <div id="timeline" className="section">
          <Timeline />
        </div>
        <div id="prizes" className="section">
          <Prizes />
        </div>
        <div id="mentors" className="section">
          <Mentors />
        </div>
        <div id="team" className="section">
          <Team />
        </div>
        <div id="sponsors" className="section">
          <Sponsors />
        </div>
        <div id="community" className="section">
          <CommunityPartnership />
        </div>
        <div id="faq" className="section">
          <FAQ />
        </div>
        <div id="contact" className="section">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
