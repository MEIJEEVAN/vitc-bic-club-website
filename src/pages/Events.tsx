import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { events } from '../data/mockData';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  const upcomingEvents = events.filter(e => e.isUpcoming);
  const pastEvents = events.filter(e => !e.isUpcoming);

  const EventCard: React.FC<{ event: typeof events[0]; index: number }> = ({ event, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-mono font-semibold text-xl text-black mb-2">
          {event.title}
        </h3>
        <div className="flex items-center gap-2 mb-3 text-gray-600">
          <Calendar size={16} />
          <span className="font-mono text-sm">
            {new Date(event.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        <p className="font-mono text-gray-600 text-sm leading-relaxed">
          {event.description}
        </p>
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
          className="text-center mb-12"
        >
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-6 text-black">
            Events
          </h1>
          <p className="font-mono text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our exciting events and activities
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 p-1 shadow-lg">
            {(['upcoming', 'past'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono px-8 py-3 rounded-md transition-all duration-200 capitalize ${
                  activeTab === tab
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                {tab} ({tab === 'upcoming' ? upcomingEvents.length : pastEvents.length})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="min-h-96">
          {activeTab === 'upcoming' ? (
            upcomingEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center py-20"
              >
                <Clock size={64} className="mx-auto mb-6 text-gray-400" />
                <h3 className="font-mono text-2xl font-semibold text-gray-600 mb-4">
                  No Upcoming Events
                </h3>
                <p className="font-mono text-gray-500">
                  Stay tuned for exciting events coming soon!
                </p>
              </motion.div>
            )
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;