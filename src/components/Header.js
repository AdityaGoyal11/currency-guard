import React from 'react';
import '../styles/SecurityLandingPage.css';

export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="header">
      <a href="/" className="logo">Currency Guard</a>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#timeline">Timeline</a>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}
