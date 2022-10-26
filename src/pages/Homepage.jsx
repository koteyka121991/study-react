import React from 'react';
const Homepage = () => {
  return (
    <>
      <div className='calendar'>
        <div className='headerCalendar'>
          <span>стрелка в лево</span>
          <p>Октябрь 2022 г</p>
          <span>стрелка в право</span>
        </div>
        <div className='calendarBlock'>
          <div className='date'>
            <table>
              <tr>
                <td>Пн</td>
                <td>Вт</td>
                <td>Ср</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </table>
          </div>
        </div>
<div>
  <p>Статистика за 90 дней</p>
</div>


      </div>
    </>
  )

}
export default Homepage;