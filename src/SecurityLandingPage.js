import React, { useEffect } from 'react';
import './styles/SecurityLandingPage.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Timeline from './Timeline';
// import ContactForm from './ContactForm';

export default function SecurityLandingPage() {

  // Add smooth scrolling when the component is mounted
  useEffect(() => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      scrollLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
  return (
    <div className="landing-page">
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h1>Currency Guard, by Aditya Goyal</h1>
            <p>A comprehensive guide to in-game currency scams, history, interviews and security meausures so you are the not one to get scammed by one of these scammy clowns!!</p>
            <div className="cta-buttons">
              <a href="#timeline" className="button primary">View Timeline</a>
              <a href="#contact" className="button secondary">Get in Touch</a>
            </div>
          </div>
        </section>
        <section id="timeline" className="timeline">
          <div className="container">
            <h2>Project Timeline</h2>
            <div className="timeline-container">
              {[1, 2, 3, 4, 5, 6].map((week) => (
                <div key={week} className="timeline-item">
                  <div className="timeline-marker">{week}</div>
                  <div className="timeline-content">
                    <h3>Week {week}</h3>
                    <p>Progress update for week {week} of my security project.</p>
                    <a href={`/articles/week-${week}`} className="button primary">
                      Read More 
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container">
            <h2>About Our Security Project</h2>
            <p>My project explores the hidden dangers of in-game currency scams, specifically targeting young players through fake websites, phishing, and deceptive practices. With a focus on the psychological impact, security risks, and legal challenges, I aim to shed light on how these scams operate and what can be done to protect young gamers. By raising awareness and advocating for safer digital environments, I hope to empower both players and parents to navigate gaming spaces with greater security and knowledge.</p>
            <div className="cta-buttons">
              <a href="#timeline" className="button primary">View Timeline</a>
              <a href="#contact" className="button secondary">Get in Touch</a>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container">
            <h2>Get in Touch</h2>
            <p>Interested in our security project? Contact us to learn more or discuss potential collaborations.</p>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <button type="submit" className="button primary">Contact Us</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
