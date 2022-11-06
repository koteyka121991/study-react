import React from 'react';
import Navigation from './Components/Navigation';
import Exercises from './Components/Exercises'
import { addBodyPartCreator, addExercisesCreator, updateBodyPartTextCreator, updateNewExercisesTextCreator } from '../../Redux/Catalog-reduser';

const Catalog = (props) => {
  
    let state = props.store.getState().catalogPage;    
    let navElements = state.bodyPart.map(el => <Navigation label={el.label} id={el.id} />);
    let exercisesElements = state.listExercises.map(el => <Exercises label={el.label} />);
    let newExercisesText = state.newExercisesText;
    let newBodyPartText= state.newBodyPartText;
    let onSendTextExercises = () => {
        props.store.dispatch(addExercisesCreator());
    }
    let onNewtextChage = (event) => {
        let text= event.target.value;
        props.store.dispatch(updateNewExercisesTextCreator(text));
    }
    let onSendTextbodyPart = () => {
        props.store.dispatch(addBodyPartCreator());
    }
    let onNewTextChageBodyPart = (event) => {
        let text= event.target.value;
        props.store.dispatch(updateBodyPartTextCreator(text));
    }
    return (
        <>
           <div>{navElements}</div> 
           <div>
                <div><textarea onChange={onNewTextChageBodyPart} value={newBodyPartText} placeholder='text of the exercise'></textarea></div>
                <div><button onClick={onSendTextbodyPart}>send</button></div>
            </div>
            <ul>{exercisesElements}</ul>
            <div>
                <div><textarea onChange={onNewtextChage} value={newExercisesText} placeholder='0'></textarea></div>
                <div><button onClick={onSendTextExercises}>send</button></div>
            </div>
        </>
    )

}
export default Catalog;