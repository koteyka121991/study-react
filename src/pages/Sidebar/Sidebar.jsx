import React from 'react';
import Navigation from './Components/Navigation';
import Style from './Sidebar.module.css'

const Sidebar = (props) => {
  
let state = props.store.getState().sidebar;
    let navElements = state.sidebar.map(el => <Navigation id={el.id} label={el.label}  />);
    return (
        <>
            <div className={Style.navigation}>
                {navElements}
            </div>

        </>
    )

}
export default Sidebar;