import React, { useState } from 'react';
import bg from '../assets/bg.png';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen, toggleDarkMode, darkMode }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <nav className={`shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={bg} alt="Logo" className="h-8 w-auto" />
            <span className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
              Assessment
              <sup className="ml-2 bg-green-500 text-white text-xs font-normal px-1 py-0.5">PRO</sup>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex space-x-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="hover:text-gray-900 transition-colors">About Us</button>
              <div className={`absolute left-0 mt-2 w-40 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity 
                ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>
                <a href="#" className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  Our Mission
                </a>
                <a href="#" className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  Team
                </a>
              </div>
            </div>

            {/* Learn More Dropdown */}
            <div className="relative group">
              <button className="hover:text-gray-900 transition-colors">Learn More</button>
              <div className={`absolute left-0 mt-2 w-40 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity 
                ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>
                <a href="#" className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  How It Works
                </a>
                <a href="#" className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  FAQs
                </a>
              </div>
            </div>

            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Dark Mode Toggle Button */}
          <button onClick={toggleDarkMode} className={`text-xl md:text-2xl ${darkMode ? 'text-yellow-400' : 'text-gray-700'}`}>
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 space-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {/* About Us Dropdown */}
            <div className="px-4 py-2">
              <button onClick={() => toggleDropdown('about')} className="w-full text-left flex justify-between">
                About Us
                <span>{dropdownOpen === 'about' ? '▲' : '▼'}</span>
              </button>
              {dropdownOpen === 'about' && (
                <div className={`mt-2 space-y-1 pl-4 rounded-lg shadow-md 
                  ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>
                  <a href="#" className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    Our Mission
                  </a>
                  <a href="#" className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    Team
                  </a>
                </div>
              )}
            </div>

            {/* Learn More Dropdown */}
            <div className="px-4 py-2">
              <button onClick={() => toggleDropdown('learn')} className="w-full text-left flex justify-between">
                Learn More
                <span>{dropdownOpen === 'learn' ? '▲' : '▼'}</span>
              </button>
              {dropdownOpen === 'learn' && (
                <div className={`mt-2 space-y-1 pl-4 rounded-lg shadow-md 
                  ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>
                  <a href="#" className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    How It Works
                  </a>
                  <a href="#" className="block px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    FAQs
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="block px-4 py-2">Privacy Policy</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
