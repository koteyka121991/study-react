import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Products from './components/Products/Produscts';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <div className='container'>
        <Route path='/main' element={<Main />}/>
        <Route path='/products' element={<Products />}/>
      
       </div>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
