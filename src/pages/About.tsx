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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLldQkfxc5fprKbEa6EHvkrAV0wVggD5osRz5KbMNk_x_Qb3-Tg9s2T8&s=10"
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