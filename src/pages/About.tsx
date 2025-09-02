import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-6 text-black">
            About BIC
          </h1>
          <p className="font-mono text-xl text-gray-600 max-w-3xl mx-auto">
            Business Innovation Community – VIT Chennai
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* BIC Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start px-4"
          >
            <img
              src="data:image/png;base64,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"
              alt="BIC Logo"
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="font-mono text-gray-700 leading-relaxed text-lg">
              The Business Innovation Community is a student-driven, non-profit organization at VIT Chennai, 
              founded with the vision of creating a collaborative space where ideas, creativity, and 
              entrepreneurship thrive.
            </p>
            
            <p className="font-mono text-gray-700 leading-relaxed">
              The community serves as a platform for students to engage in meaningful conversations, 
              exchange innovative thoughts, and transform passion projects into impactful products through 
              the power of business education and design thinking.
            </p>

            <p className="font-mono text-gray-700 leading-relaxed">
              Through interactive workshops, innovation challenges, and panel discussions, the Business 
              Innovation Community strives to nurture entrepreneurial thinking and problem-solving skills 
              among students.
            </p>
          </motion.div>
        </div>

        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 md:p-12 mb-16 shadow-xl"
        >
          <h2 className="font-mono text-3xl font-bold mb-8 text-center text-black">
            What We Do?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-mono text-lg text-gray-700 leading-relaxed mb-6">
                We connect students over ideas, nurture passion projects, and help turn them into 
                real products through business education and design thinking.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Target, title: 'Innovation Focus' },
                  { icon: Users, title: 'Community Building' },
                  { icon: Lightbulb, title: 'Idea Development' },
                  { icon: Award, title: 'Skill Enhancement' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <item.icon size={24} className="text-gray-700" />
                    <span className="font-mono font-medium text-gray-700">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Group Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="BIC Club Group Photo"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Contribution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12"
        >
          <h2 className="font-mono text-3xl font-bold mb-6 text-black">
            Our Major Contribution
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-mono text-2xl font-semibold mb-4 text-black">
                Defy Hackathon
              </h3>
              <p className="font-mono text-gray-700 leading-relaxed text-lg">
                Conducted every year, Defy Hackathon is one of the biggest hackathons at VIT Chennai, 
                organized by BIC. This flagship event brings together the brightest minds to solve 
                real-world challenges through innovation and collaboration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;