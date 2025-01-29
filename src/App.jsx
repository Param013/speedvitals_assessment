import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Graph from './components/Graphs';

const App = () => {
  const [device, setDevice] = useState('desktop');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen flex flex-col`}>
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <div className="container mx-auto px-4 py-6 md:py-12 flex-grow">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          SpeedVitals Internship Assessment
        </h1>
        <Dropdown onChange={setDevice} darkMode={darkMode}/>
        <div className="mt-4 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <Graph metric="cls" device={device} darkMode={darkMode}/>
          <Graph metric="lcp" device={device} darkMode={darkMode}/>
        </div>
      </div>
      <footer className={`text-center py-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mt-auto`}>
        <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-bold`}>Copyright © 2025</p>
      </footer>
    </div>
  );
};

export default App;
