import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Components/Enter';
import Logo from './Components/Logo';
import Register from './Components/Register';
import Style from './Header.module.css'



const Header =(props) => {
return (
  <>
  <header>
    <div className={Style.container}>
<Logo />
<ul>
  {props.isAuth ? props.login
    :<NavLink to={'/login'}><Login /></NavLink>}
    <Register />
</ul>
    
    </div>
   </header>
 
  </>
)

}
export default Header ;