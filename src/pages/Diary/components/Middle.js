import React from 'react';
import Style from './Middle.module.css'

const Middle = (props) => {

    return (
        <>
            <div className='midle'>
                <div className='diaryItems'>
                    <div className={Style.diaryItems}>
                        <div className='exerciseName'>
                            <span className='name'>
                                тут будут добовляться упражнения
                            </span>
                        </div>
                        <div className={Style.workoutSet}>
                            <div className={Style.sets}>
                                <div className='left'>
                                    <div className='weight' >{props.weight}</div>
                                    <div className='reps'>{props.reps}</div>
                                
                                </div>
                                <div className='right'>
                                    <div className='approaches'>{props.approaches}</div>
                                </div>
                                <button  >+</button>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Middle;

