import React from 'react';
import './styles/SecurityLandingPage.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Timeline from './Timeline';
// import ContactForm from './ContactForm';

export default function SecurityLandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h1>Secure Your Digital World</h1>
            <p>Follow our journey in developing comprehensive security solutions. Explore our weekly progress and innovations.</p>
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
                    <p>Progress update for week {week} of our security project</p>
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
            <p>Our security project is a 6-week intensive development process aimed at creating cutting-edge protection for businesses and individuals in the digital age. Follow our weekly progress to see how we're advancing the field of cybersecurity.</p>
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
