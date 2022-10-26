import React from 'react';
import { NavLink } from 'react-router-dom';

const List = (props) => {
  let path = "/exercises/" + props.id;
  return (
    <>
      <h2>{props.name}</h2>      
        <li>
          <NavLink to={path}>
            <div className='title'><span>{props.title}</span></div>
          </NavLink>
        </li>
   
    </>
  )
}
let listExercises = [
  { id: 1, title: "Жим лежа" },
  { id: 2, title: "Отжимания от брусьев" },
  { id: 3, title: "Отжимания широким хватом от лавки" },
  { id: 4, title: "Отжимания" },
]
let listElements = listExercises.map(exercise => <List id={exercise.id} title={exercise.title} name={exercise.name} />);
const ListExercises = () => {
  return (
    <>
        {listElements}   
    </>
  )

}
export default ListExercises;