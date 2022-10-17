import React from 'react';
import classes from './Baner.module.css';
const Baner=(props)=> {
  return    <div className={classes.abra}>
<picture>
  <img src={props.img}></img>
</picture>
</div>
}

export default Baner;