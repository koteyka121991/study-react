import State, { subscribe } from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addWeight, addReps, updateNewWeightText} from './Redux/State';



let rerenderEnterTree =(State) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>     
        <App state={State} addWeight={addWeight} addReps={addReps} updateNewWeightText={updateNewWeightText}/>      
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


rerenderEnterTree(State);

subscribe (rerenderEnterTree);
