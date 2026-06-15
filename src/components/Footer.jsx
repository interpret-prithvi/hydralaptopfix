import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/s4-logo.jpg"
                alt="S4 Solutions Logo"
                className="w-16 h-16 rounded-xl object-contain shadow-lg bg-white p-0.5"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">S4 Solutions</span>
                <span className="text-cyan-400 text-xs font-medium">Tech Excellence</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional repair and maintenance for laptops and Hydra machines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home',     id: 'hero' },
                { label: 'Services', id: 'services' },
                { label: 'About',    id: 'about' },
                { label: 'Contact',  id: 'contact' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Laptop Repair</li>
              <li>Screen Replacement</li>
              <li>Hydra Machine Service</li>
              <li>Data Recovery</li>
              <li>Performance Upgrades</li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{mockData.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{mockData.contact.email}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{mockData.contact.servicesEmail}</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              {[
                { href: mockData.social.facebook,  Icon: Facebook },
                { href: mockData.social.instagram, Icon: Instagram },
                { href: mockData.social.linkedin,  Icon: Linkedin },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} S4 Hydra Machine &amp; Laptop Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
