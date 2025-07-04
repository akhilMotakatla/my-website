import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AOS from 'aos';

import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Move useEffect inside the component function
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <Header />
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
