import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecurityLandingPage from './SecurityLandingPage';

// Import individual week components
import Week1 from './components/weeks/Week1';
import Week2 from './components/weeks/Week2';
import Week3 from './components/weeks/Week3';
import Week4 from './components/weeks/Week4';
import Week5 from './components/weeks/Week5';
import Week6 from './components/weeks/Week6';
import Week7 from './components/weeks/Week7';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<SecurityLandingPage />} />

        {/* Routes for individual week components */}
        <Route path="/articles/week-1" element={<Week1 />} />
        <Route path="/articles/week-2" element={<Week2 />} />
        <Route path="/articles/week-3" element={<Week3 />} />
        <Route path="/articles/week-4" element={<Week4 />} />
        <Route path="/articles/week-5" element={<Week5 />} />
        <Route path="/articles/week-6" element={<Week6 />} />
        <Route path="/articles/week-7" element={<Week7 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
