import React from 'react';
import classes from './Footer.module.css';

const Footer=()=> {
    return   <footer className={classes.footer}>
    <div className='container'>
      <div className={classes.menu_item_content}>
        <a href='#'>Акции</a>
        <a href='#'>В наличии</a>
        <a href='#'>Новости</a>
        <a href='#'>О нас</a>
      </div>
      <div className={classes.menu_item_content}>
        <a href='#'>Контакты</a>
        <a href='#'>Политика конфидициальности</a>
        <a href='#'>Публичная оферта</a>
      </div>
      <div className='social-and-phone'>
        <h5>Магазин</h5>
        <a href='tel:+78005555585'>+7 800 5555 585</a>
      </div>
    </div>
  </footer>
}
export default Footer;