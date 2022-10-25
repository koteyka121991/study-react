import React from 'react';

const SingleItem = (props) => {
  return (<div className='item'>
    <img src={props.img}></img>
    <div className='price'><span>{props.price}</span></div>
    <div className='name'><span>{props.name}</span></div>
  </div>)
}
const Single = (props) => {
  let singleData = [
    { img: 'https://static2.585.cloud/media/products/3e286562-1453-4138-998c-1607b9de916a.webp', id: 1, price: 'От 10 000', name: "Кольцо" },
    { img: 'https://static2.585.cloud/media/products/12890dc8-6e40-4ab5-a25a-fc2e1203b3ed.webp', id: 2 }
  ]
  return (
    <>
      <div className='container'>
        <SingleItem img={singleData[0].img} id={singleData[0].id} />
        <SingleItem img={singleData[1].img} id={singleData[1].id} />
      </div>
    </>
  )

}
export default Single;