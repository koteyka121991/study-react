import React from 'react';

const ExerciseName = (props) => {
    return (
        <div className='exerciseName'>
            <span className='name'>
                {props.exercise}
            </span>
        </div>

    )
}
export default ExerciseName;