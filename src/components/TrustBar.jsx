import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../mock';

const TrustBar = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    let animationId;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate for infinite scroll
  const badges = [...mockData.trustBadges, ...mockData.trustBadges];

  return (
    <section className="relative py-16 bg-gradient-to-r from-cyan-500 to-blue-600 overflow-hidden">

      {/* Animated Marquee */}
      <div
        ref={scrollRef}
        className="flex space-x-12 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {badges.map((badge, index) => (
          <div
            key={index}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
          >
            <span className="text-white font-semibold text-lg">{badge}</span>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <div className="text-cyan-100 text-lg font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
