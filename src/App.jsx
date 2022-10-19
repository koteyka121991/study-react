import React from 'react';
import './App.css';
import Header from './pages/Header/Header';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className='wrapper'>
    
 <Header />

 </div>
 
 </BrowserRouter>
  );
}

export default App;
