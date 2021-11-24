import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/Contactbanner';

function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}

export default Home;
