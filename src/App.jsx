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
     
          <Sidebar list={props.list}/>
<Row />
          <Routes>           
            <Route path='workaut' element={<Diary />} Route />
            <Route path='programs' element={<Programs />} Route />
            <Route path='catalog' element={<Catalog listCatalog ={props.listCatalog } listExercises ={props.listExercises } />} Route />
          </Routes>
        </div>
      </BrowserRouter>
    </>


  );
}

export default App;
