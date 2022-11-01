import React from 'react';

const Left = (props) => {
    return (
        <>
            <div className='left'>
                <div className='date'>
                    <span className='number'>{props.date}</span>
                </div>
            </div>
        </>
    )
}
export default Left;