import React, { useEffect, useState } from 'react';
import './styles/SecurityLandingPage.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Import each week's component
import Week1 from './components/weeks/Week1.js';
import Week2 from './components/weeks/Week2.js';
import Week3 from './components/weeks/Week3.js';
import Week4 from './components/weeks/Week4.js';
import Week5 from './components/weeks/Week5.js';
import Week6 from './components/weeks/Week6.js';
import Week7 from './components/weeks/Week7.js';

export default function SecurityLandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null); // Track selected week

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const weekTitles = [
    "Understanding the Problem",
    "Data Collection Techniques",
    "Security Measures and Responses",
    "Legal and Ethical Considerations",
    "Survey and Interviews",
    "Solutions and Final Report",
    "Creating this webpage!"
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const renderSelectedWeek = () => {
    switch (selectedWeek) {
      case 1: return <Week1 />;
      case 2: return <Week2 />;
      case 3: return <Week3 />;
      case 4: return <Week4 />;
      case 5: return <Week5 />;
      case 6: return <Week6 />;
      case 7: return <Week7 />;
      default: return null;
    }
  };

  return (
    <div className="landing-page">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        {/* Hide the hero section if a week is selected */}
        {!selectedWeek && (
          <section className="hero">
            <div className="container">
              <h1>Currency Guard, by Aditya Goyal</h1>
              <p>A comprehensive guide to in-game currency scams, history, interviews, and security measures so you are not the one to get scammed by one of these scammy clowns!</p>
              <div className="cta-buttons">
                <a href="#timeline" className="button primary">View Timeline</a>
                <a href="#about" className="button secondary">About Me</a>
              </div>
            </div>
          </section>
        )}

        {/* Timeline section with "Read More" links to load each week's content */}
        {!selectedWeek && (
          <section id="timeline" className="timeline">
            <div className="container">
              <h2>Project Timeline</h2>
              <div className="timeline-container">
                {[1, 2, 3, 4, 5, 6, 7].map((week, index) => (
                  <div key={week} className="timeline-item">
                    <div className="timeline-marker">{week}</div>
                    <div className="timeline-content">
                      <h3>Week {week}: {weekTitles[index]}</h3>
                      <button onClick={() => setSelectedWeek(week)} className="button primary">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Display selected week's content */}
        {selectedWeek && (
          <section className="week-details">
            <div className="container">
              <button onClick={() => setSelectedWeek(null)} className="button secondary">Back to Timeline</button>
              {renderSelectedWeek()}
            </div>
          </section>
        )}

        {/* Hide the "About This Project" section if a week is selected */}
        {!selectedWeek && (
          <section id="about" className="about">
            <div className="container">
              <h2>About This Project</h2>
              <p>My project explores the hidden dangers of in-game currency scams, specifically targeting young players through fake websites, phishing, and deceptive practices...</p>
            </div>
          </section>
        )}

        {/* Hide the "About Me" section if a week is selected */}
        {!selectedWeek && (
          <section id="about-me" className="about-me">
            <div className="container">
              <h2>About Me</h2>
              <p>I'm Aditya Goyal, and I am a Software Engineering student at UNSW...</p>
              <div className="cta-buttons">
                <a href="https://github.com/AdityaGoyal11/currency-guard/tree/master" target="_blank" rel="noopener noreferrer" className="button primary">GitHub</a>
                <a href="https://www.linkedin.com/in/aditya-goyal888/" target="_blank" rel="noopener noreferrer" className="button primary">LinkedIn</a>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
