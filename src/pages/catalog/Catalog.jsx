import React from 'react';
import Navigation from './Components/Navigation';
import Exercises from './Components/Exercises'


const Catalog = (props) => {
    
    let state = props.catalogPage;    
    let navElements = state.bodyPart.map(el => <Navigation key={el.id} label={el.label} id={el.id} />);
    let exercisesElements = state.listExercises.map(el => <Exercises key={el.id} label={el.label} id={el.id} />);
    let newExercisesText = state.newExercisesText;
    let newBodyPartText= state.newBodyPartText;
    let onSendTextExercises = () => {
        props.addExercises();
    }
    let onNewTextChage = (event) => {
        let text= event.target.value;
        props.updateNewExercisesText(text);       
    }
    let onSendTextbodyPart = () => {
        props.addBodyPart();
    }
    let onNewTextChageBodyPart = (event) => {
        let text= event.target.value;
        props.updateBodyPartText(text);
    }
    return (
        <>
        <div>
           <div>{navElements}</div> 
           <div>
                <div><textarea onChange={onNewTextChageBodyPart} value={newBodyPartText} placeholder='text of the exercise'></textarea></div>
                <div><button onClick={onSendTextbodyPart}>send</button></div>
            </div>
            <div>{exercisesElements}</div>
            <div>
                <div><textarea onChange={onNewTextChage} value={newExercisesText} placeholder='0'></textarea></div>
                <div><button onClick={onSendTextExercises}>send</button></div>
            </div>
            </div>
        </>
    )

}
export default Catalog;