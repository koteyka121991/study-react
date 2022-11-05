import React from 'react';
import Navigation from './Components/Navigation';
import Exercises from './Components/Exercises'
import { addExercisesCreator, updateNewExercisesTextCreator } from '../../Redux/State';

const Catalog = (props) => {
    
    let state = props.store.getState().catalogPage;
    
    let navElements = state.listCatalog.map(el => <Navigation label={el.label} id={el.id} />);
    let exercisesElements = state.listExercises.map(el => <Exercises label={el.label} />);
    let newExercisesText = state.newExercisesText;
    let onSendTextExercises = () => {
        props.store.dispatch(addExercisesCreator());
    }
    let onNewtextChage = (event) => {
        let text= event.target.value;
        props.store.dispatch(updateNewExercisesTextCreator(text));
    }
    return (
        <>
            {navElements}
            <div>{exercisesElements}</div>
            <div>
                <div><textarea onChange={onNewtextChage} value={newExercisesText} placeholder='0'></textarea></div>
                <div><button onClick={onSendTextExercises}>send</button></div>
            </div>
        </>
    )

}
export default Catalog;