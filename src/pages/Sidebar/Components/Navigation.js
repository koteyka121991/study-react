import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    let path = "/" + props.id;
    return (
        <>
            <NavLink to={path}>
                {props.label}
            </NavLink>
        </>
    )

}
let List = [
    { id: "workaut", label: "Дневник тренировок" },
    { id: 2, label: "Программы тренировок" },
    { id: 3, label: "Каталог упражнений" },
]
let navElements = List.map(el => <Nav id={el.id} label={el.label}  />);
const Navigation   = () => {
    return (
        <>
            {navElements}
        </>
    )

}
export default Navigation;