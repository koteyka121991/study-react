import React from 'react';
import classes from './Header.module.css';
console.log(classes);
const Header = () => {
    return <header className={classes.header}>
        <div className='container'>
            <div className={classes.logo}>
                <img src='https://www.585zolotoy.ru/_nuxt/img/585-logo.1ebf474.svg'></img>
            </div>
            <div className= {classes.nav_header}>
                <nav className='nav-header'>
                    <a href="#">Каталог</a>
                    <a href="#">Акции</a>
                    <a href="#">Магазин</a>
                </nav>
            </div>
            <div className="header-search">
                <input type="search" placeholder='Поиск'></input>

            </div>
        </div>
    </header>
}
export default Header;