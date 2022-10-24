import React from 'react';
import {NavLink} from 'react-router-dom';
const Catalog =(Props) => {
    return (
      <>
      <div className='container'>
      <div className='item'>
        <NavLink to='/catalog/1'>
        <img src='https://static2.585.cloud/media/products/3e286562-1453-4138-998c-1607b9de916a.webp'></img>
        </NavLink>
        </div>
        <div className='item'>
        <NavLink to='/catalog/2'>
        <img src='https://static2.585.cloud/media/products/3e286562-1453-4138-998c-1607b9de916a.webp'></img>
        </NavLink>
        </div>
        <div className='item'>
        <NavLink to='/catalog/3'>
        <img src='https://static2.585.cloud/media/products/3e286562-1453-4138-998c-1607b9de916a.webp'></img>
        </NavLink>
        </div>
        <div className='item'>
        <NavLink to='/catalog/4'>
        <img src='https://static2.585.cloud/media/products/3e286562-1453-4138-998c-1607b9de916a.webp'></img>
        </NavLink>
        </div>
      </div>
      </>
    )
    
    }
    export default Catalog;