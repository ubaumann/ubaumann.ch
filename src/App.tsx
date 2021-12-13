import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutMe />
    </div>
  );
}

export default App;
