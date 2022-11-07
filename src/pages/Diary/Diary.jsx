import React from 'react';
import { addApproachesCreator, addSetCreator, addWeightCreator, updateNewApproachesTextCreator, updateNewSetTextCreator, updateNewWeightTextCreator } from '../../Redux/Diary-reduser';
import Approaches from './components/Approaches';
import ExerciseName from './components/ExerciseName';
import Left from './components/Left';
import Set from './components/Set';
import Weight from './components/Weight';
import Style from './Diary.module.css'

const Diary = (props) => {
    let state = props.store.getState().diary;
    let leftElements = state.diaryDate.map(el => <Left id={el.id} date={el.date} />);
    let weightElements = state.workoutWeight.map(el => <Weight id={el.id} weight={el.weight} />);
    let setElements = state.workoutSet.map(el => <Set id={el.id} set={el.set} />);
    let exerciseNameElements = state.exerciseNameDate.map(el => <ExerciseName id={el.id} exercise={el.exercise} />);
    let approachesElements = state.workoutApproaches.map(el => <Approaches id={el.id} approaches={el.approaches} />);
    let newWorkoutWeightText = state.newWorkoutWeightText;
    let newWorkoutSetText = state.newWorkoutSetText;
    let newWorkoutApproachesText = state.newWorkoutApproachesText;
    let onSendTextWeight = () => {
        props.store.dispatch(addWeightCreator());
    }
    let onNewTextWeightChage = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewWeightTextCreator(text));
    }
    let onSendTextSet = () => {
        props.store.dispatch(addSetCreator());
    }
    let onNewTextSetChage = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewSetTextCreator(text));
    }
    let onSendTextApproaches = () => {
        props.store.dispatch(addApproachesCreator());
    }
    let onNewTextApproachesChage = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewApproachesTextCreator(text));
    }


    return (
        <>
            <ul className={Style.diaryList}>
                <li>
                    <div className={Style.diaryTable}>
                        {leftElements}
                        {exerciseNameElements}
                        <div>{weightElements}
                            <div>
                                <div><textarea onChange={onNewTextWeightChage} value={newWorkoutWeightText} placeholder='text of the exercise'></textarea></div>
                                <div><button onClick={onSendTextWeight}>send</button></div>
                            </div>
                        </div>
                        <div>{setElements}
                        <div>
                                <div><textarea onChange={onNewTextSetChage} value={newWorkoutSetText} placeholder='text of the exercise'></textarea></div>
                                <div><button onClick={onSendTextSet}>send</button></div>
                            </div>
                        </div>
                        {approachesElements}
                        <div>
                                <div><textarea onChange={onNewTextApproachesChage} value={newWorkoutApproachesText} placeholder='text of the exercise'></textarea></div>
                                <div><button onClick={onSendTextApproaches}>send</button></div>
                            </div>
                        </div>
                        <div className='right'>
                        </div>                   
                </li>
            </ul>
        </>
    )
}

export default Diary;