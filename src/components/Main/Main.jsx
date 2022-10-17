import React from 'react';
import classes from './Main.module.css';

const Main =() => {
    return     <main className={classes.Main}>
    <div className={`${classes.main} ${classes.container}` } >
      <div className={classes.baners}>
        <img src='https://static2.585.cloud/media/bunners/faf2f27a-f2c6-4730-a269-3630b7338e7f.webp'></img>
      </div>
      <div className={classes.baners}>
        <div className={classes.bnrs_item}>
          <picture>
            <img src='https://static2.585.cloud/media/bunners/ec0f7e45-400a-41e1-b068-3de5c5ee8297.webp'></img>
          </picture>
        </div>
        <div className={classes.bnrs_item}>
          <picture>
            <img src='https://static2.585.cloud/media/bunners/6ed85a1e-08a3-4912-8280-e4587e28f08d.webp'></img>
          </picture>
        </div>
        <div className={classes.bnrs_item}>
          <picture>
            <img src='https://static2.585.cloud/media/bunners/6292f7a5-7e14-42f4-b1c9-3bf7d71f4f29.webp'></img>
          </picture>
        </div>
        <div className={classes.bnrs_item}>
          <picture>
            <img src='https://static2.585.cloud/media/bunners/6e5c55f6-2346-4772-b71e-c8db7501b40d.webp'></img>
          </picture>
        </div>
      </div>
      
      <section className='about-us'>
        <h1>«585*Золотой» - ваш главный ювелирный!</h1>
        <p>«585*Золотой» - ювелирный магазин, где вы найдёте множество оригинальных
          украшений по доступным ценам. Золото, серебро, керамика, драгоценные камни:
          для праздника или повседневные. Выбирайте аксессуары для себя, друзей, родных
          и коллег. Серьги, браслеты, кольца, подвесы, цепи и часы - широкий ассортимент
          ювелирных изделий – в ближайшем магазине сети или на сайте.</p>
        <p>Подарки на любой вкус!</p>
      </section>
    </div>
  </main>
}

export default Main;