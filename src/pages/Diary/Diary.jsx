import React from 'react';
import Left from './components/Left';
import Middle from './components/Middle';
import Style from './Diary.module.css'

const Diary = (props) => {
    let leftElements = props.State.diaryData.map(el => <Left data={el.data} />);
    let middleElements = props.State.workoutSet.map(el => <Middle weight={el.weight} reps={el.reps} approaches={el.approaches} />);
    return (
        <>
            <ul className={Style.diaryList}>
                <li>
                    <div className={Style.diaryTable}>
                        {leftElements}
                        {middleElements}
                        <div className='right'>
                            <button>Изменить</button>
                        </div>
                    </div>
                </li>
            
            </ul>
        </>
    )

}
export default Diary;