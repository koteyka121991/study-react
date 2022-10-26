import React from 'react';
import Clasess from "./Singlepage.module.css"

const Singlepage =() => {
    return (
      <>
      <div> 
        <div className={Clasess.container}>     
        <div className={Clasess.img}>
          <img src='https://static2.585.cloud/media/products/6ab67680-19bf-4f72-80bb-e9dccf26abc4.webp'></img>
        </div>
        <div className='short-description'>
          <h1>Золотое кольцо с бриллиантами и родированием</h1>
          
            <ul className={Clasess.size}>
              <li><button>16.5</button></li>
              <li><button>17</button></li>
              <li><button>17,5</button></li>
              <li><button>19</button></li>
            </ul>
         <div className='price'>
          <span>16 000</span>
         </div>
         <div className='addCart'>
          <button>Добавить в корзину</button>
         </div>
         <div className='accordion'>
          <p>Бренд
TALANT
Вставки
Бриллиант, вес 0.499 карат, огранка Бп-33, количество 26 шт., чистота/цвет 3/5
Бриллиант, вес 0.170 карат, огранка 17кр, количество 44 шт., чистота/цвет 2/3
Материалы
Золото, проба 585, вес от 2.68 гр
Металл
Золото 585 пробы
Страна происхождения
Россия</p>
         </div>
        </div>
        </div>  
      </div>
      </>
    )
    
    }
    export default Singlepage;