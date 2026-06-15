import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { mockData } from '../mock';
import { Card, CardHeader, CardContent } from './ui/card';

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
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
  const testimonials = [...mockData.testimonials, ...mockData.testimonials];

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-cyan-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600">Trusted by professionals across Bengaluru</p>
        </motion.div>

        {/* Infinite Scrolling Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-80 bg-white/80 backdrop-blur-sm border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-cyan-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
