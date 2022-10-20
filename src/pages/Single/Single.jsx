import React from 'react';
import classes from './Single.module.css';

const Single=() => {
    return (
<>
<div className={classes.container}>

<div className={classes.product}>
  <div className={classes.img}>
    <img src='https://static2.585.cloud/media/products/6ab67680-19bf-4f72-80bb-e9dccf26abc4.webp'></img>
  </div>  
</div>
<div className={classes.product}>
  <div className={classes.artical}>
    <h1>Кольцо</h1>
  </div>  
</div>
   
 
  </div>

</>
    )
}

export default Single;