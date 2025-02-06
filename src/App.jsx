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
      <div className="App bg-[#1a1a1a] min-h-screen overflow-hidden relative">
        <Navbar />
        <main className="relative">
          <Header />
          <div className="space-y-0">
            <CountdownTimer targetDate={HACKATHON_DETAILS.date} />
            <section id="about" className="section">
              <AboutUs />
            </section>
            <section id="themes" className="section">
              <HackathonThemes />
            </section>
            <section id="timeline" className="section">
              <Timeline />
            </section>
            <section id="prizes" className="section">
              <Prizes />
            </section>
            <section id="mentors" className="section">
              <Mentors />
            </section>
            <section id="team" className="section">
              <Team />
            </section>
            <section id="sponsors" className="section">
              <Sponsors />
            </section>
            <section id="community" className="section">
              <CommunityPartnership />
            </section>
            <section id="faq" className="section">
              <FAQ />
            </section>
            <section id="contact" className="section">
              <ContactUs />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
