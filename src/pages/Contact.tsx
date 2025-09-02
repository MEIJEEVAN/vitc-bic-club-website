import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-6 text-black">
            Contact Us
          </h1>
          <p className="font-mono text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us. We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg">
              <h2 className="font-mono text-2xl font-bold mb-6 text-black">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <MapPin size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-lg text-black mb-1">
                      Location
                    </h3>
                    <p className="font-mono text-gray-600">
                      VIT Chennai Campus<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Mail size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-lg text-black mb-1">
                      Email
                    </h3>
                    <p className="font-mono text-gray-600">
                      bic@vitchennai.ac.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg">
              <h2 className="font-mono text-2xl font-bold mb-6 text-black">
                Follow Us
              </h2>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                  { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-800' }
                ].map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-gray-100 rounded-lg text-gray-700 hover:text-white transition-all duration-200 ${color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg"
          >
            <h2 className="font-mono text-2xl font-bold mb-6 text-black">
              Send us a Message
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="font-mono block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="font-mono w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="font-mono block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="font-mono w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="font-mono block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="font-mono w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="font-mono block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="font-mono w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us about your ideas, questions, or how you'd like to get involved..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="font-mono w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;