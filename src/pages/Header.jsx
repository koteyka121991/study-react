import React from 'react';
import {NavLink} from 'react-router-dom';
import './Layout.css'
const linkActive =  ({isActive})=>isActive ? 'active-link': '';

const Header =() => {
return (
  <>

    <div className='container'>
      <div className='logo'>
      <NavLink to='/'  end className={linkActive}><img src='https://www.585zolotoy.ru/_nuxt/img/585-logo.1ebf474.svg'></img></NavLink>
      </div>
      <div className='navigation'>
    <NavLink to='catalog' className={linkActive}>Каталог</NavLink>
    <NavLink to='products' className={linkActive}>Акции</NavLink>
    <NavLink to='contactpage' className={linkActive}>Магазин</NavLink>
    </div>
    
    </div>


  </>
)

}
export default Header ;