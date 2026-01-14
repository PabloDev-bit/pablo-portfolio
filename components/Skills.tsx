import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">{t.skills.title}</h2>
          <p className="text-slate-400 max-w-2xl text-lg font-light">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-sm font-bold text-accent uppercase tracking-widest border-b border-white/10 pb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ 
                      scale: 1.03, 
                      backgroundColor: "rgba(30, 41, 59, 0.8)",
                      borderColor: "rgba(99, 102, 241, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center p-4 bg-surface/40 rounded-xl border border-white/5 transition-all duration-300 backdrop-blur-sm cursor-default shadow-sm hover:shadow-lg hover:shadow-primary/10"
                  >
                    <span className="text-slate-400 group-hover:text-primary transition-colors mr-4 bg-white/5 p-2 rounded-lg group-hover:bg-primary/10">
                      {skill.icon}
                    </span>
                    <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;