import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Header from './pages/Header/Header';
import Sidebar from './pages/Sidebar/Sidebar';
import Programs from './pages/TrainingPrograms/Programs';
import Diary from './pages/Diary/Diary';
import Catalog from './pages/catalog/Catalog';
import Row from './pages/Row/Row';


function App(props) {

  return (
    <>

      <BrowserRouter>
        <div className='wrapper'>
          <Header />
          <Row />
          <div className='container'>
          <Sidebar list={props.state.sidebar} />
         <section className='content'>
          <Routes>
            <Route path='workaut' element={<Diary State={props.state.diary}/>}/>
            <Route path='programs' element={<Programs />} />
            <Route path='catalog' element={<Catalog State={props.state.catalogPage} />} />
          </Routes>
          </section>
          </div>
          
        </div>
      </BrowserRouter>
    </>


  );
}

export default App;
