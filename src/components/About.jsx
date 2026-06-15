import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../mock';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                We Are
              </span>
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>S4 Hydra Machine &amp; Laptop Solutions is a technology-focused repair and maintenance company specializing in advanced laptop, computer, motherboard, and Hydra machine servicing.</p>
              <p>We combine professional diagnostics, precision repairs, and preventive maintenance to maximize the lifespan and performance of critical equipment.</p>
              <p>Our team of expert technicians brings years of experience and dedication to every repair, ensuring your devices receive the care they deserve.</p>
            </div>
          </motion.div>

          {/* Right — Founder's Note */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border-2 border-cyan-100"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              S4
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Founder's Message</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>At S4 Hydra Machine &amp; Laptop Solutions, our mission is simple — provide reliable, transparent, and professional repair services that customers can trust.</p>
              <p>Whether it's a critical laptop issue or a sophisticated Hydra machine requiring expert attention, we are committed to delivering quality workmanship, genuine solutions, and long-term reliability.</p>
            </div>
            <div className="mt-6 pt-6 border-t border-cyan-200">
              <p className="text-gray-500 text-sm text-center italic">* Founder photo will be added soon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
