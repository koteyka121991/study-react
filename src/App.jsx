import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Diary from './pages/Diary';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Exercises from './pages/Exercises/Exercises';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <>
     <BrowserRouter>
      <div className='wrapper'>
        <Header />   
        
        <Routes>
          <Route path='/' element={<Homepage />} Route />
          <Route path='diary' element={<Diary />} Route />
          <Route path='exercises' element={<Exercises />} Route />
          <Route path='contactpage' element={<Contactpage />} Route />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
