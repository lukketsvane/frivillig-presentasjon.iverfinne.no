import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';

export const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-purple-900/90 backdrop-blur-md text-yellow-100 shadow-lg' : 'bg-transparent text-purple-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo(SectionId.HERO)}>
            <span className="font-bold text-2xl tracking-tight font-['Space_Grotesk']">BINDELEDD</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo(SectionId.CONCEPT)} className="hover:text-purple-400 transition-colors font-medium">Konseptet</button>
            <button onClick={() => scrollTo(SectionId.JOURNEY)} className="hover:text-purple-400 transition-colors font-medium">Reisa</button>
            <button onClick={() => scrollTo(SectionId.PROTOTYPE)} className="hover:text-purple-400 transition-colors font-medium">Løysinga</button>
            <button onClick={() => scrollTo(SectionId.SCALE)} className="hover:text-purple-400 transition-colors font-medium">Verdi</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-900 text-yellow-100 absolute w-full p-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollTo(SectionId.CONCEPT)} className="text-left py-2">Konseptet</button>
            <button onClick={() => scrollTo(SectionId.JOURNEY)} className="text-left py-2">Reisa</button>
            <button onClick={() => scrollTo(SectionId.PROTOTYPE)} className="text-left py-2">Løysinga</button>
            <button onClick={() => scrollTo(SectionId.SCALE)} className="text-left py-2">Verdi</button>
          </div>
        </div>
      )}
    </nav>
  );
};