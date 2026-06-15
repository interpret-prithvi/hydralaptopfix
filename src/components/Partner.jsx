import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin } from 'lucide-react';
import { mockData } from '../mock';

const Partner = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Partner
            </span>
          </h2>
          <p className="text-xl text-gray-600">Working together to deliver excellence</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl border-2 border-cyan-100 p-8 hover:border-cyan-400 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
              {mockData.partner.name}
            </h3>
            <div className="flex items-start space-x-3 p-4 bg-cyan-50 rounded-xl">
              <MapPin className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">{mockData.partner.address}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
