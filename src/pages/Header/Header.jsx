import React from 'react';
import classes from './Header.module.css'
import { Routes, Route, Link } from 'react-router-dom';
import Products from '../Products/Products';
import Homepage from '../Homepage/Homepage';
import Layout from '../../components/Layout';



const Header = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src='https://www.585zolotoy.ru/_nuxt/img/585-logo.1ebf474.svg'></img>
                </div>
                <div className={classes.navigation}>
                    <Link to='/' activeClassName={classes.active}>Главная</Link>
                    <Link to='products'>Каталог</Link>                
                </div>
                <div className='search'>
                    <input></input>
                </div>
                <div className='cart'>Корзина</div>
            </div>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>

        </>
    )
}

export default Header;