import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Single from './pages/Single';
import Catalog from './pages/Catalog';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
      
        <Routes>
          <Route path='/' element={<Homepage />} Route />
          <Route path='catalog' element={<Catalog />} Route />
          <Route path='products' element={<Single />} Route />
          <Route path='contactpage' element={<Contactpage />} Route />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
