import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import WorkDetails from './WorkDetails';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <Home />
          </>
        } />
        <Route path="/work/:id" element={<WorkDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
