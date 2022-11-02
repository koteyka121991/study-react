import React from 'react';
import Style from './Middle.module.css'

const Middle = (props) => {

    return (

        <div className={Style.workoutDate}>
            <div className='weight' >{props.weight}</div>            
            <div className='reps'>{props.reps}</div>        
        </div>

    )
}
export default Middle;

