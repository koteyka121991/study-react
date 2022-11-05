import React from 'react';
import { addWeightActonCreator, updateNewWeightTextActonCreator } from '../../Redux/State';
import Approaches from './components/Approaches';
import ExerciseName from './components/ExerciseName';
import Left from './components/Left';
import Middle from './components/Middle';
import Style from './Diary.module.css'

const Diary = (props) => {
    let leftElements = props.diary.diaryDate.map(el => <Left id={el.id} date={el.date} />);
    let middleElements = props.diary.workoutDate.map(el => <Middle weight={el.weight} reps={el.reps} />);
    let exerciseNameElements = props.diary.exerciseNameDate.map(el => <ExerciseName id={el.id} exercise={el.exercise} />);
    let approachesElements = props.diary.workoutApproaches.map(el => <Approaches id={el.id} approaches={el.approaches} />);
   
let newElement = React.createRef();
let addWeight = () => {
    debugger;
    props.dispatch(addWeightActonCreator());
}
let newElementReps = React.createRef();
let addReps = () => {
    let text = newElementReps.current.value;
    props.addReps(text);
}
let onWeightChange = () => {
    debugger;
    let text = newElement.current.value;
    let action = updateNewWeightTextActonCreator(text);
    props.dispatch(action);
}
return (
    <>
        <ul className={Style.diaryList}>
            <li>
                <div className={Style.diaryTable}>
                    {leftElements}
                    {exerciseNameElements}
                    {middleElements}
                    <textarea onChange={onWeightChange} ref={newElement} value={props.newWeightText} />
                    <textarea ref={newElementReps}></textarea>
                    {approachesElements}
                    <div className='right'>
                        <button onClick={addWeight}>Изменить</button>
                        <button onClick={addReps}>Изменить</button>
                    </div>
                </div>
            </li>
        </ul>
    </>
)
}

export default Diary;