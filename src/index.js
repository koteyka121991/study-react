import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
let list = [
  { id: "workaut", label: "Дневник тренировок" },
  { id: 'programs', label: "Программы тренировок" },
  { id: 'catalog', label: "Каталог упражнений" },
]
let listCatalog = [
  {label: "Грудь" },
  { label: "Ноги" },
  { label: "Руки" },
]
let listExercises = [
  {label: "Жим" },
  {label: "Присяд" },
  {label: "Отжимаия" },
]
root.render(
  <React.StrictMode>
   
      <App listCatalog={listCatalog} list={list} listExercises={listExercises} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
