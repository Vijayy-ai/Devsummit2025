import React from 'react';
import AboutUs from '../components/AboutUs';
import HackathonThemes from '../components/HackathonThemes';
import HackathonPrizes from '../components/HackathonPrizes';
import Timeline from '../components/Timeline';
import Sponsors from '../components/Sponsors';
import CommunityPartnership from '../components/CommunityPartnership';
import Mentors from '../components/Mentors';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import ContactUs from '../components/ContactUs';
import Map from '../components/Map';

function Home() {
  return (
    <div className="home-page">
      <AboutUs />
      <HackathonThemes />
      <HackathonPrizes />
      <Timeline />
      <Sponsors />
      <CommunityPartnership />
      <Mentors />
      <Team />
      <FAQ />
      <ContactUs />
      <Map />
    </div>
  );
}

export default Home;
