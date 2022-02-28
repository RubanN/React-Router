import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Career from './pages/Career/Career';
import Customer from './pages/CustomerSupport/Customer';
import Delivery from './pages/DeliveryArea/Delivery';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/delivery" element={<Delivery />} />
    </Routes>
  );
}

export default App;

