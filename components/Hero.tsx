import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      },
    },
  };

  const titleWords = "Pablo Hernandez".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3], 
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.1, 0.2],
            x: [0, 100, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[100px]"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-primary/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
              {t.hero.location}
            </span>
          </div>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[1.1]">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 100, opacity: 0, rotate: 5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.2, 0.65, 0.3, 0.9],
                  delay: i * 0.1 
                }}
                className="inline-block mr-4 md:mr-6 origin-bottom-left"
              >
                {word}
              </motion.span>
            ))}
            <motion.span 
              variants={itemVariants}
              className="block text-3xl md:text-5xl mt-4 font-normal text-slate-400"
            >
               {t.hero.role.split('&')[0]} & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent animate-shimmer bg-[length:200%_100%]">AI Architect</span>
            </motion.span>
          </h1>
        </div>

        <motion.p 
          variants={itemVariants}
          className="mt-8 max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-background transition-all duration-200 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            {t.hero.viewProjects}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#ai-chat"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 border border-white/20 bg-white/5 rounded-full hover:bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <Sparkles className="mr-2 w-5 h-5 text-accent transition-transform group-hover:rotate-12" />
            {t.hero.askAi}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;