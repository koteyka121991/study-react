import React from 'react';
import classes from './Header.module.css'
import {Routes, Route, Link} from 'react-router-dom';
import Products from '../Products/Products';
import Homepage from '../Homepage/Homepage';


const Header =() => {
    return (
<>
  <div className={classes.container}>
    <div className={classes.logo}>
        <img src=''></img>
    </div>
    <div className={classes.navigation}>
    <Link to='/'>Каталог</Link>
        <Link to='products'>Каталог</Link>
        <a href='#'>Акции</a>
        <a href='#'>Магазин</a>
    </div>
<div className='search'>
    <input></input>
</div>
<div className='cart'>Корзина</div>
  </div>

  <Routes>
    <Route path ="/" element={<Homepage />}/>
    <Route path ="/products" element={<Products />}/>
</Routes>
</>
    )
}

export default Header;