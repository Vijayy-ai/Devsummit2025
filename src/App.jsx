import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Mentors from "./components/Mentor";
import Team from "./components/Team";
import FacultyCoordinator from "./components/FacultyCoordinator";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CountdownTimer from "./components/CountdownTimer";
import CommunityPartnership from "./components/CommunityPartnership";
import ContactUs from "./components/ContactUs";
import HackathonThemes from "./components/HackathonThemes";
import { HACKATHON_DETAILS } from "./utils/constants";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import DigitalSwag from "./components/digitalswag";

function App() {
  useIntersectionObserver();

  return (
    <Router>
      <div className="App bg-[#1a1a1a] min-h-screen overflow-hidden relative">
        <Navbar />
        <main className="relative">
          <Header />
          <div>
            <CountdownTimer targetDate={HACKATHON_DETAILS.date} />
            <section id="about">
              <AboutUs />
            </section>
            <section id="digitalswag">
              <DigitalSwag />
            </section>
            <section id="themes">
              <HackathonThemes />
            </section>
            <section id="timeline">
              <Timeline />
            </section>
            <section id="prizes">
              <Prizes />
            </section>
            <section id="mentors">
              <Mentors />
            </section>
            <section id="team">
              <Team />
              <FacultyCoordinator />
            </section>
            <section id="sponsors">
              <Sponsors />
            </section>
            <section id="community">
              <CommunityPartnership />
            </section>
            <section id="faq">
              <FAQ />
            </section>
            <section id="contact">
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
