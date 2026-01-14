import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GraduationCap, HeartHandshake, Globe, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const education = [
    {
      school: t.about.edu.ipssi.school,
      degree: t.about.edu.ipssi.degree,
      year: "2026 - 2028",
      upcoming: true
    },
    {
      school: t.about.edu.cegepSherbrooke.school,
      degree: t.about.edu.cegepSherbrooke.degree,
      year: "2024 - 2026"
    },
    {
      school: t.about.edu.cegepStFelicien.school,
      degree: t.about.edu.cegepStFelicien.degree,
      year: "2022 - 2023"
    },
    {
      school: t.about.edu.bac.school,
      degree: t.about.edu.bac.degree,
      year: "2019 - 2022"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t.about.title}
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]"
        >
          
          {/* Block 1: Main Bio (Large) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.1)" }}
            className="col-span-1 md:col-span-2 row-span-1 p-8 rounded-3xl bg-surface/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group flex flex-col justify-center transition-colors hover:border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
               <div className="flex items-center gap-3 mb-4 text-primary">
                 <Code2 size={24} />
                 <span className="text-xs font-bold uppercase tracking-wider opacity-70">Bio</span>
               </div>
               <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                 <span className="text-white font-medium">{t.about.bio.split('.')[0]}.</span> {t.about.bio.split('.').slice(1).join('.')} {t.about.details}
               </p>
            </div>
          </motion.div>

          {/* Block 2: Education (Tall) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.1)" }}
            className="col-span-1 row-span-2 p-8 rounded-3xl bg-surface/50 border border-white/5 backdrop-blur-sm flex flex-col relative overflow-hidden hover:border-emerald-500/20 transition-colors"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <div className="flex items-center gap-3 mb-8">
               <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <GraduationCap size={24} />
               </div>
               <h3 className="text-xl font-bold text-white">{t.about.educationTitle}</h3>
             </div>
             
             <div className="space-y-8 relative pl-4 border-l border-white/10 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {education.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="relative"
                  >
                    <div className={`absolute -left-[21px] top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300 ${item.upcoming ? 'bg-primary border-primary animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'bg-surface border-slate-600 group-hover:border-emerald-500/50'}`}></div>
                    <span className="text-xs font-mono text-slate-500 block mb-1">{item.year}</span>
                    <h4 className="text-white font-medium text-sm leading-tight mb-1 group-hover:text-emerald-400 transition-colors">{item.school}</h4>
                    <p className="text-slate-400 text-xs">{item.degree}</p>
                  </motion.div>
                ))}
             </div>
          </motion.div>

          {/* Block 3: Relation Client (Small) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotate: 1, boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.15)" }}
            className="col-span-1 p-8 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-surface border border-white/5 backdrop-blur-sm flex flex-col justify-between group hover:border-indigo-500/30 transition-all duration-300"
          >
             <div className="flex justify-between items-start">
               <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-300 group-hover:scale-110 transition-transform">
                 <HeartHandshake size={28} />
               </div>
               <span className="text-xs font-bold bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded">{t.about.cards.softSkillTag}</span>
             </div>
             <div>
                <h3 className="text-lg font-bold text-white mb-2">{t.about.cards.dualCompetenceTitle}</h3>
                <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                  {t.about.cards.dualCompetenceDesc}
                </p>
             </div>
          </motion.div>

          {/* Block 4: Location (Small) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotate: -1, boxShadow: "0 20px 40px -10px rgba(6, 182, 212, 0.15)" }}
            className="col-span-1 p-8 rounded-3xl bg-surface/50 border border-white/5 backdrop-blur-sm relative overflow-hidden flex flex-col justify-end group hover:border-accent/30 transition-all duration-300"
          >
            {/* Abstract Map Visual */}
             <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <svg width="100%" height="100%">
                   <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                     <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                   </pattern>
                   <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
             </div>
             <div className="relative z-10 flex items-center gap-3">
               <div className="p-2 bg-accent/10 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                 <Globe size={20} />
               </div>
               <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{t.about.cards.locationTitle}</p>
                  <p className="text-white font-bold group-hover:text-accent transition-colors">Saint-Malo & Bordeaux</p>
               </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;