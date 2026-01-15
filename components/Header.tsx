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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <div className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto bg-surface/70 backdrop-blur-xl border border-white/10 px-2 py-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center space-x-1"
        >
          <div className="px-4 py-2 font-display font-bold text-white tracking-tight">
            Pablo<span className="text-accent">.dev</span>
          </div>

          <div className="w-px h-6 bg-white/10 mx-2"></div>

          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
              </a>
            ))}
          </div>

          <div className="w-px h-6 bg-white/10 mx-2"></div>
          
          <div className="flex items-center space-x-1 pr-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${
                  language === lang.code 
                    ? 'bg-white/10 text-white shadow-inner' 
                    : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a 
            href="#contact" 
            className="ml-2 bg-white text-black hover:bg-slate-200 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
          >
            {t.nav.contact}
          </a>
        </motion.nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-display font-bold text-xl text-white">Pablo<span className="text-accent">.dev</span></span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-1"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-3xl font-display font-medium text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="w-full h-px bg-white/10 my-6"></div>
              <div className="flex gap-4">
                {languages.map((lang) => (
                   <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-sm font-bold px-4 py-2 rounded-lg border ${
                      language === lang.code 
                        ? 'border-accent text-accent bg-accent/10' 
                        : 'border-white/10 text-slate-400'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;