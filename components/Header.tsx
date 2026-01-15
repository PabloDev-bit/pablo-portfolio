import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  
  const options: AddEventListenerOptions = { passive: true };
  window.addEventListener('scroll', handleScroll, options);
  return () => window.removeEventListener('scroll', handleScroll, options);
}, []);


  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.aiChat, href: '#ai-chat' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <>
      {/* Desktop Floating Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:block ${
          scrolled ? 'w-[95%] max-w-6xl' : 'w-[90%] max-w-5xl'
        }`}
      >
        <nav className={`glass-panel rounded-2xl px-8 py-4 ${scrolled ? 'shadow-2xl' : 'shadow-xl'}`}>
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Pablo.dev
            </motion.a>

            <div className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </motion.a>
              ))}

              <div className="flex gap-2 ml-4 border-l border-gray-700 pl-4">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      language === lang.code
                        ? 'bg-primary text-white shadow-lg shadow-primary/50'
                        : 'text-gray-400 hover:text-white hover:bg-surface'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {lang.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <nav className={`glass-panel transition-all duration-300 ${scrolled ? 'shadow-2xl' : ''}`}>
          <div className="flex items-center justify-between px-4 py-4">
            <a
              href="#"
              className="text-xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Pablo.dev
            </a>

            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                      language === lang.code
                        ? 'bg-primary text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-gray-800"
              >
                <div className="px-4 py-4 space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-300 hover:text-primary transition-colors py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
