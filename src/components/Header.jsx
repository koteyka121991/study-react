import React from 'react';

const Header = () => {
    return <header className='header'>
        <div className='container'>
            <div className="logo">
                <img src='https://www.585zolotoy.ru/_nuxt/img/585-logo.1ebf474.svg'></img>
            </div>
            <div className='nav-menu'>
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