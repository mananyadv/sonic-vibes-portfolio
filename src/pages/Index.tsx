
import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SubBrands from '../components/home/SubBrands';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SplineBackground from '../components/SplineBackground';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SplineBackground />
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <FeaturedProjects />
        <SubBrands />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
