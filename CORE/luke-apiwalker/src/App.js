// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApiBrowser from './components/ApiBrowser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ApiBrowser />} />
        <Route path="/:id" element={<ApiBrowser />} />
      </Routes>
    </Router>
  );
};

export default App;
