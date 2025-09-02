import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-white/90 backdrop-blur-sm border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-mono font-semibold text-lg mb-4 text-black">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="font-mono text-sm">
                  VIT Chennai Campus<br />
                  Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={18} className="flex-shrink-0" />
                <span className="font-mono text-sm">bic@vitchennai.ac.in</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-mono font-semibold text-lg mb-4 text-black">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-black hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Club Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-mono font-semibold text-lg mb-4 text-black">BIC Club</h3>
            <p className="font-mono text-sm text-gray-600 leading-relaxed">
              Transforming ideas into products through business education and design thinking.
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-mono text-sm text-gray-500">
            © 2025 Business Innovation Community Club (BIC) – VIT Chennai. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;