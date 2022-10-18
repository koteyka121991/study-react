import React from 'react';
import classes from './Navigation.module.css';
const Navigation=(props)=> {
    return (
        <div className='nav__menu'>    
    <a href="/Produscts">Каталог</a>
    <a href="#">Акции</a>   
    <a href="/main">Магазин</a>  
    </div>   
    )
}


export default Navigation;