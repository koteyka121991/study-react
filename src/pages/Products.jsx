import React from 'react';
import { NavLink } from 'react-router-dom';
const Product = (props) => {
  let path = "/products/" + props.id;
  return (<div className='item'>
    <NavLink to={path}>
      <img src={props.img}></img>
      <div className='price'><span>{props.price}</span></div>
      <div className='name'><span>{props.name}</span></div>
    </NavLink>
  </div>)
}


const Products = (props) => {
  let productData = [
    { img: 'https://rest.adamas.ru/img/m/1000/123/60/1236005-A50-01_1.jpg', id: 1, price: 'От 10 000', name: "Кольцо" },
    { img: 'https://basket-02.wb.ru/vol167/part16722/16722423/images/big/2.jpg', id: 2, price: 'От 10 000', name: "Кольцо" }
  ]
  let productElements = productData.map(product => <Product img={product.img} id={product.id} price={product.price} name={product.name} />);

  return (
    <>
      <div className='container'>
        {productElements}
      </div>
    </>
  )
}
export default Products;