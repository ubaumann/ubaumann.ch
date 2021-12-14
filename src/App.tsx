import React from 'react';
import './App.css';

import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Banner />
      <AboutMe />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
