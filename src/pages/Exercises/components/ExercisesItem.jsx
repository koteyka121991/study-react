import React from 'react';
const Item = (props) => {
  return (
    <div className='item'>
      <h2>{props.title}</h2> 
    </div>
  )
}
let itemData = [
  { title: "Грудь" },
  { title: "Ноги" },
  { title: "Руки" },
]
let itemElements = itemData.map(item => <Item title={item.title} />);

const ExercisesItem = () => {
  return (
    <>    
      {itemElements}      
    </>
  )

}
export default ExercisesItem;