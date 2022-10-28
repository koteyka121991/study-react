import React from 'react';
import Navigation from './Components/Navigation';
import Style from './Catalog.module.css'
import Exercises from './Components/Exercises';
const Catalog = (props) => {

    let navElements = props.State.listCatalog.map(el => <Navigation label={el.label}  />);
    let exercisesElements = props.State.listExercises.map(el => <Exercises label={el.label}  />);
    return (
        <>
            <div className={Style.catalog}>
                
                {navElements}
                <ul>
                {exercisesElements}
                </ul>
            </div>
       

        </>
    )

}
export default Catalog;