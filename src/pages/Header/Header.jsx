import React from 'react';
import Enter from './Components/Enter';
import Logo from './Components/Logo';
import Register from './Components/Register';
import Style from './Header.module.css'



const Header =() => {
return (
  <>
  <header>
    <div className={Style.container}>
<Logo />
<ul>
    <Enter />
    <Register />
</ul>
    
    </div>
   </header>
 
  </>
)

}
export default Header ;