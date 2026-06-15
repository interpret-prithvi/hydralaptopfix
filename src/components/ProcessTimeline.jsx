import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../mock';

const ProcessTimeline = () => {
  return (
    <section id="process" className="relative py-24 bg-gradient-to-b from-cyan-50 to-white overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to ensure quality repairs every time
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connection line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {mockData.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl bg-white border-2 border-cyan-100 hover:border-cyan-400 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-cyan-500 font-bold text-sm mb-2">STEP {step.step}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </div>

                {/* Step circle — desktop */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white z-10">
                  {step.step}
                </div>

                {/* Step circle — mobile */}
                <div className="lg:hidden absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                  {step.step}
                </div>

                <div className="w-full lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
