import React from 'react';
import Navigation from './Components/Navigation';
import Exercises from './Components/Exercises'

const Catalog = (props) => {

    let navElements = props.State.listCatalog.map(el => <Navigation label={el.label} id={el.id}  />);
    let exercisesElements = props.State.listExercises.map(el => <Exercises label={el.label}  />);
    return (
        <>     
                {navElements}              
                {exercisesElements}   
        </>
    )

}
export default Catalog;