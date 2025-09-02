import React from 'react';
import ParticleBackground from './ParticleBackground';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      
      <main className="relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;