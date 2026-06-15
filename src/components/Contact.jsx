import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { mockData } from '../mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600">We're here to help with all your repair needs</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 border-2 border-cyan-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone',           value: mockData.contact.phone },
                  { icon: Phone, label: 'WhatsApp',        value: mockData.contact.whatsapp },
                  { icon: Mail,  label: 'Info Email',      value: mockData.contact.email },
                  { icon: Mail,  label: 'Services Email',  value: mockData.contact.servicesEmail },
                  { icon: MapPin,label: 'Address',         value: mockData.contact.address },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{label}</p>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-cyan-100 shadow-lg h-64">
              <iframe
                src="https://maps.google.com/maps?q=Icon+Derma,+V+Nagenahalli+Main+Road,+Guddadahalli,+Hebbal,+Bengaluru,+Karnataka+560032&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S4 Solutions — Icon Derma Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border-2 border-cyan-100 shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Name *</label>
                <Input
                  id="name" name="name" value={formData.name}
                  onChange={handleChange} required
                  className="w-full border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                <Input
                  id="email" name="email" type="email" value={formData.email}
                  onChange={handleChange} required
                  className="w-full border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                <Input
                  id="phone" name="phone" type="tel" value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                <Textarea
                  id="message" name="message" value={formData.message}
                  onChange={handleChange} required rows={5}
                  className="w-full border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder="Tell us about your repair needs..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
