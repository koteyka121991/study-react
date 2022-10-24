import React from 'react';
import { NavLink } from 'react-router-dom';
const ProductItem = (props) => {
  let path = "/catalog/" + props.id;
  return (<div className='item'>
    <NavLink to={path}>
      <img src={props.img}></img>
      <div className='price'><span>{props.price}</span></div>
      <div className='name'><span>{props.name}</span></div>
    </NavLink>
  </div>)
}
const Catalog = (Props) => {
  return (
    <>
      <div className='container'>
        <ProductItem img="https://static2.585.cloud/media/products/3e286562-1453-4138-998c-1607b9de916a.webp" id="1" price="От 10 000" name="Кольцо" />
        <ProductItem img="https://static2.585.cloud/media/products/a59df126-beae-4c14-bef2-355a1e7422ff.webp" id="2" price="От 10 000" name="Кольцо" />
        <ProductItem img="https://static2.585.cloud/media/products/07487ce5-9e0e-4479-adbc-5d301219b726.webp" id="3" price="От 10 000" name="Кольцо" />
        <ProductItem img="https://static2.585.cloud/media/products/c3c16f62-4174-4aeb-80d0-7a309be36738.webp" id="4" price="От 10 000" name="Кольцо" />
      </div>
    </>
  )

}
export default Catalog;