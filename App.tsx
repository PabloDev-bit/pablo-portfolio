import './index.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import './index.css';


function App() {
  return (
    <div className="min-h-screen bg-dark text-slate-50 font-sans selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIChat />
      </main>
      <Contact />
    </div>
  );
}

export default App;