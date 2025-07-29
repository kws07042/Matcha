import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import IntroAnimation from './components/IntroAnimation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
      {introDone && (
        <>
          <Navbar />
          <Header />
          <About />
          <Skills />
          <Projects />
        </>
      )}
    </div>
  );
}

export default App;
