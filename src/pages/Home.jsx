import React, { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import LaptopServices from '../components/LaptopServices';
import HydraServices from '../components/HydraServices';
import StuckSection from '../components/StuckSection';
import WhyChoose from '../components/WhyChoose';
import ProcessTimeline from '../components/ProcessTimeline';
import About from '../components/About';
import Partner from '../components/Partner';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP scroll animations go here
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative bg-white overflow-hidden">
      <ParticleBackground />
      <Header scrollProgress={scrollYProgress} />
      <Hero />
      <TrustBar />
      <LaptopServices />
      <HydraServices />
      <StuckSection />
      <WhyChoose />
      <ProcessTimeline />
      <About />
      <Partner />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
