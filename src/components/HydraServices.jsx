import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Waves, Shield, AlertCircle } from 'lucide-react';
import { mockData } from '../mock';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const iconMap = { Activity, Cpu, Waves, Shield, AlertCircle };

const HydraServices = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hydra Machine{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized maintenance and repair for professional Hydra facial machines
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.hydraServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl bg-white backdrop-blur-sm relative overflow-hidden">
                  {/* Medical-tech gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Glow effect */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <CardHeader className="relative z-10">
                    <div className="mb-4">
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg ring-4 ring-cyan-100 group-hover:ring-cyan-300 transition-all"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HydraServices;
