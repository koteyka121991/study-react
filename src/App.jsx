import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Programs from './pages/TrainingPrograms/Programs';
import Row from './pages/Row/Row';
import CatalogContainer from './pages/catalog/CatalogContainer';
import DiaryContainer from './pages/Diary/DiaryContainer';
import SidebarContainer from './pages/Sidebar/SidebarContainer';
import UsersContainer from './pages/Users/UsersContainer';
import WorkoutContainer from './pages/workout/Workout-container';
import ProfileContainer from './pages/Profile/ProfileContainer';


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
              <Route path='workaut' element={<DiaryContainer />
              } />
              <Route path='programs' element={<Programs />} />
              <Route path='catalog' element={<CatalogContainer />} />
              <Route path='users' element={<UsersContainer/> }/>
              <Route path='workouttest' element={<WorkoutContainer/> }/>
              <Route path='profile' element={<ProfileContainer/> }/>
            </Routes>
          </section>
        </div>
      </div>

    </>


  );
}

export default App;
