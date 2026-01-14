import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from 'lucide-react';
import { PROJECT_METADATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
       <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{t.projects.title}</h2>
            <p className="text-slate-400 max-w-xl text-lg font-light">{t.projects.subtitle}</p>
          </div>
          <motion.a 
            whileHover={{ x: 5 }}
            href="#" 
            className="hidden md:flex items-center text-white hover:text-accent transition-colors font-medium"
          >
            {t.projects.viewAll} <ArrowRight size={16} className="ml-2" />
          </motion.a>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.projects.items.map((project, idx) => {
            // @ts-ignore
            const meta = PROJECT_METADATA[project.id];
            
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-colors shadow-lg hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <motion.img 
                    src={meta.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <motion.a 
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                      href={meta.github} 
                      className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 delay-100"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a 
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                      href={meta.link} 
                      className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 delay-200"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 relative z-20 -mt-12 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-surface">
                  <div className="mb-4">
                     <div className="flex flex-wrap gap-2 mb-3">
                      {meta.technologies.slice(0, 3).map((tech: string) => (
                        <span key={tech} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-sm font-medium text-white/40 group-hover:text-white transition-colors pt-4 border-t border-white/5 mt-2">
                    {t.projects.explore} <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;