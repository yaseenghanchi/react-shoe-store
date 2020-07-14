import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Store from './components/store/Store';
import Products from './components/store/Products';
import ProductInfo from './components/store/ProductInfo';
import {NotFound} from './components/NotFound';


function App() {
  return (
  <Router>   
    <Nav /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="store" element={<Store />}>
        <Route path="/" element={<Products />}/>
        <Route path=":index" element={<ProductInfo />}/>
      </Route>  
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );

  
}



export default App;
