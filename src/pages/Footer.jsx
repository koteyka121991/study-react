import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='container'>
                <div className='navigation'>
                    <NavLink to='catalog' >Каталог</NavLink>
                    <NavLink to='products' >Акции</NavLink>
                    <NavLink to='contactpage' >Магазин</NavLink>
                </div>

            </div>


        </>
    )

}
export default Footer;