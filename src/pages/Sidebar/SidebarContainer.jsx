
import React from 'react';
import Navigation from './Components/Navigation';
import Style from './Sidebar.module.css'
import Sidebar from './Sidebar';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}


const SidebarContainer = connect(mapStateToProps)(Sidebar);
export default SidebarContainer;