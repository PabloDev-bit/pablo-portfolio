import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'nav.about', id: 'about' },
    { key: 'nav.skills', id: 'skills' },
    { key: 'nav.projects', id: 'projects' },
    { key: 'nav.contact', id: 'contact' },
  ];

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Pablo.dev
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(item.key)}
              </motion.button>
            ))}
            
            <div className="flex items-center space-x-2 ml-4">
              {(['FR', 'EN', 'ES'] as const).map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                    language === lang
                      ? 'bg-primary text-white'
                      : 'text-gray-400 hover:text-white hover:bg-surface'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang}
                </motion.button>
              ))}
            </div>
          </nav>

          <motion.button
            className="md:hidden text-gray-300 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-panel"
        >
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-primary hover:bg-surface rounded-lg transition-all"
              >
                {t(item.key)}
              </button>
            ))}
            
            <div className="flex space-x-2 pt-2">
              {(['FR', 'EN', 'ES'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                    language === lang
                      ? 'bg-primary text-white'
                      : 'text-gray-400 bg-surface hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
