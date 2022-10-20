import React from 'react';
import './App.css';
import Header from './pages/Header/Header';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
  <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
