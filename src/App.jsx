import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Preachings from './pages/Preachings';
import Give from './pages/Give';

function App() {
  return (
    <Router>
    <div className="pt-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/preachings" element={<Preachings />} />
        <Route path='/give' element={<Give />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
