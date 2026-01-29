import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { SpotlightBackground } from './components/ui/SpotlightBackground';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <SpotlightBackground>
        <div className="min-h-screen bg-transparent text-[var(--text-primary)] transition-colors duration-300">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <section id="hero"><Hero /></section>
            <section id="skills"><Skills /></section>
            <section id="experience"><Experience /></section>
            <section id="projects"><Projects /></section>
            <section id="education"><Education /></section>
            <section id="certifications"><Certifications /></section>
            <section id="achievements"><Achievements /></section>
            <section id="contact"><Contact /></section>
          </main>
          <Footer />
        </div>
      </SpotlightBackground>
    </Router>
  );
}

export default App;
