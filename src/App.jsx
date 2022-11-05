import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './pages/Header/Header';
import Sidebar from './pages/Sidebar/Sidebar';
import Programs from './pages/TrainingPrograms/Programs';
import Diary from './pages/Diary/Diary';
import Catalog from './pages/catalog/Catalog';
import Row from './pages/Row/Row';


function App(props) {
  return (
    <>

        <div className='wrapper'>
          <Header />
          <Row />
          <div className='container'>
            <Sidebar list={props.state.sidebar} />
            <section className='content'>
              <Routes>
                <Route path='workaut' element={<Diary diary=
                  {props.state.diary} dispatch={props.dispatch}
                  
                    />
                } />
                <Route path='programs' element={<Programs />} />
                <Route path='catalog' element={<Catalog store={props.store}  />} />
              </Routes>
            </section>
          </div>
        </div>
      
    </>


  );
}

export default App;
