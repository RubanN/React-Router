import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
// import Home from './pages/Home/Home';
import TopCategories from './pages/topCategories/TopCategories';
import TopDeals from './pages/topDeals/TopDeals';
import TopProducts from './pages/topProducts/TopProducts'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/TopCategories" element={<TopCategories />} />
        <Route path="/TopDeals" element={<TopDeals />} />
        <Route path="/TopProducts" element={<TopProducts />} />

      </Routes>
    </div>

  );
}

export default App;

