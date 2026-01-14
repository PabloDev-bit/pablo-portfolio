import React from 'react';
import { Mail, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-black pt-32 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-20">
          
          <div className="max-w-md">
            <h2 className="text-5xl font-display font-bold text-white mb-8 leading-tight">
              {t.contact.ctaTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t.contact.ctaHighlight}</span> {t.contact.ctaEnd}
            </h2>
            <div className="flex space-x-4">
               {[Github, Linkedin, Mail].map((Icon, idx) => (
                 <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                   <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>

          <div className="w-full max-w-lg">
             <form className="space-y-6">
                <div className="group relative">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder-transparent"
                    placeholder={t.contact.placeholderEmail}
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-slate-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-valid:-top-2 peer-valid:text-xs">
                    {t.contact.email}
                  </label>
                </div>
                
                <div className="group relative">
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder-transparent resize-none"
                    placeholder={t.contact.placeholderMsg}
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-4 text-slate-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-valid:-top-2 peer-valid:text-xs">
                    {t.contact.message}
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center"
                >
                  {t.contact.send} <ArrowUpRight size={18} className="ml-2" />
                </button>
             </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-slate-600 text-sm">
          <p>{t.contact.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2"></span>
            {t.contact.status}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;