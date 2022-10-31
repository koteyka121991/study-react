import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = (props) => {
    let path = "/" + props.id;
    return (
        <>
            <NavLink to={path} >
                {props.label}
            </NavLink>
        </>
    )

}


export default Navigation;