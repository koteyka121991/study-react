import React from 'react';
import classes from './Homepage.module.css'

const Homepage =() => {
    return (
<>

  <div className={classes.container}>
<div className={classes.banners}>
  <div className={classes.slider}>

    <img src='https://static2.585.cloud/media/bunners/e0de1ad5-89e7-4022-ad3f-38b7d7eab3f4.webp'></img>

  </div>
</div>
<div className={classes.banners}>
  <div className={classes.item}>
    <img src='https://static2.585.cloud/media/bunners/965c9586-6a5b-4e9f-a0ea-2aea81bcf475.webp'></img>
  </div>
  <div className={classes.item}>
    <img src='https://static2.585.cloud/media/bunners/acd724c1-dae1-45bd-86f0-6286b5f6bcd9.webp'></img>
  </div>
  <div className={classes.item}>
    <img src='https://static2.585.cloud/media/bunners/3304904b-b59b-479b-9c96-a0c5df70bcc7.webp'></img>
  </div>
  <div className={classes.item}>
    <img src='https://static2.585.cloud/media/bunners/b0941b9e-9f59-43c8-ae6b-10d4792a4968.webp'></img>
  </div>
</div>
<div className={classes.banners}>
  <div className={classes.item}>
    <img src='https://static2.585.cloud/media/bunners/965c9586-6a5b-4e9f-a0ea-2aea81bcf475.webp'></img>
  </div>
  <div className={classes.item}>
    <img src='https://static2.585.cloud/media/bunners/acd724c1-dae1-45bd-86f0-6286b5f6bcd9.webp'></img>
  </div>
  <div className={classes.item}>
    <img src='https://static2.585.cloud/media/bunners/3304904b-b59b-479b-9c96-a0c5df70bcc7.webp'></img>
  </div>
  <div className={classes.item}>
    <img src='https://static2.585.cloud/media/bunners/b0941b9e-9f59-43c8-ae6b-10d4792a4968.webp'></img>
  </div>
</div>
   
 
  </div>

</>
    )
}

export default Homepage;