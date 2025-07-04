import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="App dark-mode">
      <Header />
      <Contact />
      <About />
      <Experience />
      <Projects />
      
    </div>
  );
}

export default App;
