import React from 'react';
import classes from './Header.module.css';
import Navigation from './Items/Navigation';
import Nav from './Items/Navigation';
console.log(classes);
const Header = () => {
    return <header className={classes.header}>
        <div className='container'>
            <div className={classes.logo}>
                <img src='https://www.585zolotoy.ru/_nuxt/img/585-logo.1ebf474.svg'></img>
            </div>
              
             <Navigation />
            
                
            <div className="search">            
                <input type="search" placeholder='Поиск'>
                    </input>
            </div>
        </div>
    </header>
}
export default Header;