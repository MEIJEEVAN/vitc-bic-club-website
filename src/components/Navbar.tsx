import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'members', label: 'Members' },
    { id: 'events', label: 'Events' },
    { id: 'recruitment', label: 'Recruitment' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md border-l border-gray-200 shadow-2xl z-40 p-8"
            >
              <div className="mt-16 space-y-4">
                {pages.map((page) => (
                  <motion.button
                    key={page.id}
                    onClick={() => handleNavClick(page.id)}
                    className={`block w-full text-left font-mono text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                      currentPage === page.id
                        ? 'bg-black text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                    }`}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {page.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;