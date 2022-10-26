import React from 'react';
import {NavLink} from 'react-router-dom';
import './Layout.css'
const linkActive =  ({isActive})=>isActive ? 'active-link': '';

const Header =() => {
return (
  <>

    <div className='container'>
      <div className='logo'>
      <NavLink to='/'  end className={linkActive}><img src='https://png.pngtree.com/png-clipart/20200727/original/pngtree-fitness-badge-sport-logo-png-image_5393352.jpg'></img></NavLink>
      </div>
      <div className='navigation'>
    <NavLink to='diary' className={linkActive}>Дневник тренировок</NavLink>
    <NavLink to='contactpage' className={linkActive}>Личные данные</NavLink>
    <NavLink to='exercises' className={linkActive}>Упражнения</NavLink>
    </div>
    
    </div>


  </>
)

}
export default Header ;