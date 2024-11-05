import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecurityLandingPage from './SecurityLandingPage';
import WeekProgress from './components/WeekProgress';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SecurityLandingPage />} />
        {[1, 2, 3, 4, 5, 6].map(week => (
          <Route
            key={week}
            path={`/articles/week-${week}`}
            element={<WeekProgress week={week} />}
          />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>
);
