import React from 'react';
import Style from './Diary.module.css'
const Diary = () => {
    return (
        <>
            <div className={Style.container}>
                <table>
                    <tr>
                        <td>
                            <div className='date'>28 октября</div>
                        </td>
                        <td>
                            <div>
                                <table>
                                    <tr>
                                        <td>Точок с груди с паузой
                                        </td>
                                        <td>
                                            <div><div>22</div><div>2</div></div>
                                        </td>
                                        <td>
                                            <div>2</div>
                                        </td>
                                    </tr>

                                </table>
                            </div>
                        </td>
                        <td>
                            <button>Изменить</button>
                        </td>
                    </tr>
                </table>
            </div>

        </>
    )

}
export default Diary;