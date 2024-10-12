import React from 'react';
import ReactDOM from 'react-dom/client';
import SecurityLandingPage from './SecurityLandingPage'; // Import your main component

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure there's a div with id "root" in your index.html
root.render(
  <React.StrictMode>
    <SecurityLandingPage />
  </React.StrictMode>
);
