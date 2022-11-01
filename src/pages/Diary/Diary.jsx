import React from 'react';
import Left from './components/Left';
import Middle from './components/Middle';
import Style from './Diary.module.css'

const Diary = (props) => {
  
    let leftElements = props.State.diaryDate.map(el => <Left id={el.id} date={el.date} />);
    let middleElements = props.State.workoutWeight.map(el => <Middle weight={el.weight} />);
    let newElement =React.createRef();
    let addWeight =() => {
    
        let text = newElement.current.value;
        props.addWeight(text);
    }

    return (
        <>
            <ul className={Style.diaryList}>
                <li>
                    <div className={Style.diaryTable}>
                        {leftElements}
                        {middleElements}
                        <textarea ref={newElement}></textarea>
                        <div className='right'>
                            <button onClick={addWeight}>Изменить</button>
                        </div>
                    </div>
                </li>
            
            </ul>
        </>
    )

}
export default Diary;