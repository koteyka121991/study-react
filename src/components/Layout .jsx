import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './Layout.css'
const linkActive =  ({isActive})=>isActive ? 'active-link': '';

const Layout =() => {
return (
  <>
  <header>
    <div className='container'>
      <div className='logo'>
        <img src='https://www.585zolotoy.ru/_nuxt/img/585-logo.1ebf474.svg'></img>
      </div>
      <div className='navigation'>
    <NavLink to='/' end className={linkActive}>Главная</NavLink>
    <NavLink to='productspage' className={linkActive}>Продукты</NavLink>
    <NavLink to='singlepage' className={linkActive}>Один продукт</NavLink>
    <NavLink to='contactpage' className={linkActive}>Магазин</NavLink>
    </div>
    
    </div>
   </header>
   <main><Outlet></Outlet></main>
   <footer>2022</footer>
  </>
)

}
export default Layout ;