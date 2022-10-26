import React from 'react';

import './../Exercises/Exercises.css';
import ExercisesItem from './components/ExercisesItem';
import ListExercises from './components/ListExercises';


const Exercises = () => {
  return (
    <>
      <ExercisesItem />
      <ul>
      <ListExercises />
      </ul>
    </>
  )

}
export default Exercises;