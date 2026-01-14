import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Bot, User, Terminal } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const AIChat: React.FC = () => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  
  // MODIFICATION 1 : On crée une référence pour le CONTENEUR (la boîte qui scrolle)
  // au lieu de l'élément final.
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        role: 'model',
        text: t.aiChat.greeting,
        timestamp: new Date()
      }
    ]);
  }, [language, t.aiChat.greeting]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // MODIFICATION 2 : Cette fonction ne force plus la page à bouger.
  // Elle ajuste juste la position de l'ascenseur du chat.
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text, language);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-chat" className="py-32 relative bg-gradient-to-b from-background to-surface overflow-hidden">
      
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: [0, 0.5, 0], y: -100 }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
           <div className="inline-flex items-center justify-center p-2 rounded-full border border-accent/20 bg-accent/5 mb-6">
             <Sparkles size={16} className="text-accent mr-2" />
             <span className="text-xs font-bold text-accent uppercase tracking-widest">{t.aiChat.tag}</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
             {t.aiChat.title}
           </h2>
           <p className="text-slate-400">{t.aiChat.subtitle}</p>
        </motion.div>

        {/* Terminal/Chat Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
          className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent"
        >
          <div className="absolute inset-0 bg-accent/20 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          
          <div className="relative bg-[#0a0f1e] rounded-2xl overflow-hidden shadow-2xl min-h-[600px] flex flex-col font-mono border border-white/5">
            {/* Header */}
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5 select-none">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 hover:bg-red-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 hover:bg-yellow-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50 hover:bg-emerald-500 transition-colors"></div>
              </div>
              <div className="ml-4 text-xs text-slate-500 flex items-center">
                <Terminal size={12} className="mr-2" /> pablo_ai_agent.exe
              </div>
            </div>

            {/* MODIFICATION 3 : On attache la ref ici, sur le conteneur scrollable */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10"
            >
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
                      <div className={`flex-shrink-0 w-8 h-8 rounded border flex items-center justify-center ${
                        msg.role === 'user' ? 'border-primary/50 bg-primary/10' : 'border-accent/50 bg-accent/10'
                      }`}>
                        {msg.role === 'user' ? <User size={14} className="text-primary" /> : <Bot size={14} className="text-accent" />}
                      </div>
                      
                      <div className={`p-4 rounded-xl text-sm leading-relaxed border shadow-lg ${
                        msg.role === 'user' 
                          ? 'bg-primary/5 border-primary/20 text-slate-200' 
                          : 'bg-white/5 border-white/10 text-slate-300'
                      }`}>
                        <p>{msg.text}</p>
                        <span className="text-[10px] opacity-40 mt-2 block">{msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {loading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-4 text-accent/50 text-xs"
                >
                  <Terminal size={12} />
                  <span className="animate-pulse">{t.aiChat.processing}</span>
                </motion.div>
              )}
              {/* On a supprimé la div vide "messagesEndRef" qui était ici */}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-white/[0.02]">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.aiChat.inputPlaceholder}
                  className="w-full bg-transparent text-white placeholder-slate-600 focus:outline-none py-3 pl-4 pr-12 font-mono text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="absolute right-2 p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIChat;