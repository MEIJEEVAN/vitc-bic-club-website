import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, ArrowRight, Calendar } from 'lucide-react';

const Recruitment: React.FC = () => {
  const requirements = [
    'Passion for innovation and entrepreneurship',
    'Collaborative mindset and team spirit',
    'Commitment to learning and growth',
    'Interest in business development',
    'Creative problem-solving abilities'
  ];

  const benefits = [
    'Access to exclusive workshops and events',
    'Networking opportunities with industry experts',
    'Hands-on experience with real projects',
    'Leadership and skill development',
    'Certificate of participation',
    'Mentorship from senior members'
  ];

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
            Join BIC
          </h1>
          <p className="font-mono text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Join our community of innovators.
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 md:p-12 mb-16 shadow-xl text-center"
        >
          <Users size={64} className="mx-auto mb-6 text-gray-700" />
          <h2 className="font-mono text-3xl font-bold mb-6 text-black">
            Be Part of Something Bigger
          </h2>
          <p className="font-mono text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            Join BIC and become part of a vibrant community where your ideas matter. Connect with 
            like-minded individuals, work on exciting projects, and develop the skills needed to 
            turn your vision into reality.
          </p>
          
          <motion.div
            className="inline-flex items-center gap-2 bg-black text-white font-mono px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar size={20} />
            Recruitment Opens Soon
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg"
          >
            <h2 className="font-mono text-2xl font-bold mb-6 text-black">
              What We Look For
            </h2>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="font-mono text-gray-700">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg"
          >
            <h2 className="font-mono text-2xl font-bold mb-6 text-black">
              What You'll Gain
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <ArrowRight size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="font-mono text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="font-mono text-3xl font-bold mb-6 text-black">
            Application Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Apply', description: 'Submit your application form' },
              { step: '02', title: 'Interview', description: 'Participate in our selection process' },
              { step: '03', title: 'Welcome', description: 'Join the BIC family!' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="font-mono text-3xl font-bold text-gray-300 mb-4">
                  {item.step}
                </div>
                <h3 className="font-mono font-semibold text-xl text-black mb-3">
                  {item.title}
                </h3>
                <p className="font-mono text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Recruitment;