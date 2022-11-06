import React from 'react';
import { addWeightCreator, updateNewWeightTextCreator } from '../../Redux/Diary-reduser';
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

    let onSendTextWeight = () => {
        props.store.dispatch(addWeightCreator());
    }
    let onNewTextWeightChage = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewWeightTextCreator(text));
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
                            </div></div>

                        <div>{setElements}
                        </div>
                        {approachesElements}
                        <div className='right'>

                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Diary;