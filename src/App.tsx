import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Members from './pages/Members';
import Events from './pages/Events';
import Recruitment from './pages/Recruitment';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    const pageProps = { onNavigate: setCurrentPage };
    
    switch (currentPage) {
      case 'home':
        return <Home {...pageProps} />;
      case 'about':
        return <About />;
      case 'gallery':
        return <Gallery />;
      case 'members':
        return <Members />;
      case 'events':
        return <Events />;
      case 'recruitment':
        return <Recruitment />;
      case 'contact':
        return <Contact />;
      default:
        return <Home {...pageProps} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default App;