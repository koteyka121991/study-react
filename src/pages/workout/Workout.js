import React from 'react';
import Button from '../common/buttons/Button';
let Workout = (props) => {
    return (
        <>
            {props.workoutPage.dates.map(d => <div key={d.id}>
                {d.date} {d.text} <Button />
            </div>)}
        </>

    )
}
export default Workout;