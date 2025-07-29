import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Programs from './components/Programs';
import IntroAnimation from './components/IntroAnimation';
import Skills from './components/Contact';

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
          <Programs />
          <Experience />
          <Skills />
        </>
      )}
    </div>
  );
}

export default App;
