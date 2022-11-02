import React from 'react';
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
    let newWeightText = props.diary.newWeightText;
    let updateNewWeightText=props.diary.updateNewWeightText;
    let newElement = React.createRef();
    let addWeight = () => {      
        props.addWeight();      
    }   
    let newElementReps = React.createRef();
    let addReps = () => {   
        let text = newElementReps.current.value;
        props.addReps(text);
    }
    let onWeightChange =() => {       
        let text = newElement.current.value;
        props.updateNewWeightText(text);
    }
    return (
        <>
            <ul className={Style.diaryList}>
                <li>
                    <div className={Style.diaryTable}>
                        {leftElements}
                        {exerciseNameElements}
                        {middleElements}
                        <textarea onChange={onWeightChange} ref={newElement} value={newWeightText} />                        
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