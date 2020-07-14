import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Store from './components/Store';


function App() {
  return (
  <Router>   
    <Nav /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="store" element={<Store />} />
    </Routes>
  </Router>
  );
}



export default App;
