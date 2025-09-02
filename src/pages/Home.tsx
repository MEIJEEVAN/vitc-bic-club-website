import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Lightbulb } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Business Innovation Community Club - VIT Chennai
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            A student-driven community transforming ideas into products through 
            business education and design thinking.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => onNavigate('about')}
            className="font-mono bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 md:p-12 shadow-xl"
          >
            <h2 className="font-mono text-2xl md:text-3xl font-bold mb-6 text-black">
              About Our Community
            </h2>
            <p className="font-mono text-gray-600 text-lg leading-relaxed mb-8">
              The Business Innovation Community is a non-profit organization. We are a learning 
              community for students to connect over ideas and conversations. We give a platform 
              to passion projects on campus, and enable students to turn their projects into 
              products through business education and design thinking.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Innovation',
                  description: 'Transform ideas into impactful solutions'
                },
                {
                  icon: Users,
                  title: 'Community',
                  description: 'Connect with like-minded innovators'
                },
                {
                  icon: Lightbulb,
                  title: 'Learning',
                  description: 'Develop entrepreneurial skills'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200"
                  whileHover={{ y: -5 }}
                >
                  <item.icon size={32} className="mx-auto mb-4 text-gray-700" />
                  <h3 className="font-mono font-semibold text-lg mb-2 text-black">
                    {item.title}
                  </h3>
                  <p className="font-mono text-gray-600 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;