import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { mockData } from '../mock';
import { HardDrive, Monitor, Droplet } from 'lucide-react';

// Custom PDT / LED Light Therapy Mask SVG icon
const PDTMaskIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Light rays */}
    <line x1="24" y1="2"  x2="24" y2="8"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="38" y1="6"  x2="34" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="10" y1="6"  x2="14" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="44" y1="18" x2="38" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="4"  y1="18" x2="10" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Mask shell */}
    <path
      d="M12 18 C12 12 36 12 36 18 L36 30 C36 38 28 42 24 42 C20 42 12 38 12 30 Z"
      stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"
    />
    {/* Eye cutouts */}
    <ellipse cx="18" cy="24" rx="3" ry="2" fill="currentColor" opacity="0.6"/>
    <ellipse cx="30" cy="24" rx="3" ry="2" fill="currentColor" opacity="0.6"/>
    {/* LED dots across mask */}
    <circle cx="24" cy="30" r="1.5" fill="currentColor"/>
    <circle cx="19" cy="32" r="1"   fill="currentColor" opacity="0.7"/>
    <circle cx="29" cy="32" r="1"   fill="currentColor" opacity="0.7"/>
  </svg>
);

// Simple animated floating icons (replaces @react-three/fiber 3D scene)
const FloatingIcon = ({ Icon, delay, color }) => {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0, scale: 1 }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`absolute ${color} p-6 rounded-2xl backdrop-blur-sm border-2 shadow-2xl`}
    >
      <Icon className="w-12 h-12 text-white" />
    </motion.div>
  );
};

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block text-gray-900">Advanced Repair</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Solutions
              </span>
              <span className="block text-gray-900">For Laptops &amp; Hydra Machines</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {mockData.company.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Diagnosis
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                { color: 'bg-cyan-500', label: 'Expert Technicians' },
                { color: 'bg-blue-500', label: 'Genuine Parts' },
                { color: 'bg-cyan-400', label: 'Data Protection' },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center space-x-2 text-gray-700">
                  <div className={`w-3 h-3 ${color} rounded-full animate-pulse`} />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Floating Icons Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-3xl backdrop-blur-sm overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                <FloatingIcon Icon={Monitor}    delay={0} color="bg-gradient-to-br from-cyan-400/80 to-cyan-600/80 border-cyan-300 top-20 left-20" />
                <FloatingIcon Icon={PDTMaskIcon} delay={1} color="bg-gradient-to-br from-blue-400/80 to-blue-600/80 border-blue-300 top-32 right-24" />
                <FloatingIcon Icon={HardDrive}  delay={2} color="bg-gradient-to-br from-cyan-500/80 to-blue-500/80 border-cyan-400 bottom-32 left-32" />
                <FloatingIcon Icon={Droplet}    delay={3} color="bg-gradient-to-br from-blue-500/80 to-cyan-500/80 border-blue-400 bottom-24 right-20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cyan-500 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
