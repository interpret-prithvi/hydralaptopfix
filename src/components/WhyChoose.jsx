import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Award, Clock, Database, FileCheck } from 'lucide-react';

const WhyChoose = () => {
  const laptopBenefits = [
    { icon: CheckCircle2, title: 'Expert Diagnosis',     description: 'Thorough analysis by certified technicians' },
    { icon: Shield,       title: 'Genuine Spare Parts',  description: 'Only authentic components used' },
    { icon: Database,     title: 'Data Protection',      description: 'Your data security is our priority' },
    { icon: Award,        title: 'Cost Efficiency',      description: 'Transparent pricing with no hidden charges' },
    { icon: Clock,        title: 'Long-Term Reliability',description: 'Quality repairs that last' },
    { icon: FileCheck,    title: 'Warranty Coverage',    description: 'All repairs backed by warranty' },
  ];

  const hydraBenefits = [
    { icon: CheckCircle2, title: 'Accurate Diagnostics',    description: 'Precise fault identification' },
    { icon: Clock,        title: 'Machine Longevity',       description: 'Extend equipment lifespan' },
    { icon: Award,        title: 'Performance Restoration', description: 'Return to optimal operation' },
    { icon: Shield,       title: 'Preventive Maintenance',  description: 'Avoid costly breakdowns' },
    { icon: Database,     title: 'System Hygiene',          description: 'Deep cleaning and sanitization' },
    { icon: FileCheck,    title: 'Safety Compliance',       description: 'Meet industry standards' },
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Laptop Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Why Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Laptop Repair
            </span>{' '}
            Matters
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Trust your device to experts who understand technology
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laptopBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg group"
                >
                  <Icon className="w-12 h-12 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Hydra Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Why Hydra Expert{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Repair
            </span>{' '}
            Matters
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Specialized care for your professional equipment investment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hydraBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group"
                >
                  <Icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
