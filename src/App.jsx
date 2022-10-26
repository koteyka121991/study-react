import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Singlepage from './pages/Singlepage';
import Productspage from './pages/Productspage';
import Layout from './components/Layout ';
import { BrowserRouter } from 'react-router-dom';
import Header from './pages/Header/Header';
import Sidebar from './pages/Sidebar/Sidebar';
import Diary from './pages/Diary/Diary';

function App() {
  return (
    <>
<BrowserRouter>
<div className='wrapper'>
<Header />
<Sidebar />

      <Routes>      
          <Route path= '/' element={<Homepage />} Route />
          <Route path='workaut' element={<Diary />} Route />
          <Route path='singlepage' element={<Singlepage />} Route />
          <Route path='contactpage' element={<Contactpage />} Route />
        
      </Routes>
      </div>
      </BrowserRouter>
     </>
  
  );
}

export default App;
