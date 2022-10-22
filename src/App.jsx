import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Singlepage from './pages/Singlepage';
import Productspage from './pages/Productspage';
import Layout from './components/Layout ';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} Route />
          <Route path='productspage' element={<Productspage />} Route />
          <Route path='singlepage' element={<Singlepage />} Route />
          <Route path='contactpage' element={<Contactpage />} Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
