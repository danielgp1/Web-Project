import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome-page/Welcome';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Welcome Page - This is the default route */}
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default App;
