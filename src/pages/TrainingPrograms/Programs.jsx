import React from 'react';
import Style from './Programs.module.css';
function NumberList(props) {
    return (
       <>
      <li>{props.items}</li>
     
      </>
    )
      
  
  
  }
  
  


let Program = (props) => {
    let numbers = [
        {items: 1},
        {items: 2}
    ];
    let numberElements = numbers .map(el => < NumberList  items={el.items} />);
    return (
        <div key={props.id}>
      <h3>{props.title}</h3>
      <ul>{numberElements}</ul>
     
    </div>
    )
}

const Programs = (props) => {
    let ProgramData = [
        { id: 1, title: 'Ноги' },
        { id: 2, title: 'Руки'},
        
    ];
    let programElements = ProgramData.map(el => <Program  id={el.id} title={el.title}  list={el.list}/>);
    return (
        <>

            <div className={Style.container}>
            {programElements }
            </div>


        </>
    )

}
export default Programs;