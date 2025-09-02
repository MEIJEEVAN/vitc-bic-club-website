import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { members } from '../data/mockData';

const Members: React.FC = () => {
  const coreTeam = members.filter(m => m.category === 'core');
  const facultyCoordinators = members.filter(m => m.category === 'faculty');
  const departmentLeads = {
    events: members.filter(m => m.category === 'events'),
    content: members.filter(m => m.category === 'content'),
    design: members.filter(m => m.category === 'design')
  };

  const MemberCard: React.FC<{ member: typeof members[0]; index: number }> = ({ member, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-200"
      whileHover={{ y: -5 }}
    >
      <div className="text-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
        />
        <h3 className="font-mono font-semibold text-lg text-black mb-1">
          {member.name}
        </h3>
        <p className="font-mono text-gray-600 mb-4">
          {member.role}
        </p>
        
        {member.linkedin && (
          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-black transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={16} />
            LinkedIn
          </motion.a>
        )}
      </div>
    </motion.div>
  );

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
            Our Team
          </h1>
          <p className="font-mono text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals driving innovation at BIC
          </p>
        </motion.div>

        {/* Core Team */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-3xl font-bold mb-8 text-center text-black"
          >
            Core Team
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* Faculty Coordinators */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-3xl font-bold mb-8 text-center text-black"
          >
            Faculty Coordinators
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {facultyCoordinators.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* Department Leads */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-mono text-3xl font-bold mb-12 text-center text-black"
          >
            Department Leads
          </motion.h2>
          
          <div className="space-y-12">
            {Object.entries(departmentLeads).map(([department, teamMembers], sectionIndex) => (
              <div key={department}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + sectionIndex * 0.2 }}
                  className="font-mono text-2xl font-semibold mb-6 text-black capitalize"
                >
                  {department === 'events' ? 'Events & Outreach' : 
                   department === 'content' ? 'Content & Social Media' : 
                   'Design'}
                </motion.h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {teamMembers.map((member, index) => (
                    <MemberCard 
                      key={member.id} 
                      member={member} 
                      index={sectionIndex * 3 + index} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Members;