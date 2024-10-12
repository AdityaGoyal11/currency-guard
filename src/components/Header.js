import React from 'react';
import '../styles/SecurityLandingPage.css';


export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">SecurityGuard</a>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#timeline">Timeline</a>
        <a href="#contact">Contact</a>
        
      </nav>
    </header>
  );
}
