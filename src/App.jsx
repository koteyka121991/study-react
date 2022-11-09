import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Programs from './pages/TrainingPrograms/Programs';
import Row from './pages/Row/Row';
import CatalogContainer from './pages/catalog/CatalogContainer';
import DiaryContainer from './pages/Diary/DiaryContainer';
import SidebarContainer from './pages/Sidebar/SidebarContainer';


function App(props) {
  return (
    <>
      <div className='wrapper'>
          
        <Header />
        <Row />
        <div className='container'>
          <SidebarContainer />
          <section className='content'>
            <Routes>
              <Route path='workaut' element={<DiaryContainer/>
              } />
              <Route path='programs' element={<Programs />} />
              <Route path='catalog' element={<CatalogContainer/>} />
            </Routes>
          </section>
        </div>
      </div>

    </>


  );
}

export default App;
