import React from 'react';

const Left = (props) => {
    return (
        <>
            <div className='left'>
                <div className='date' >{props.id}
                    <span className='number'>{props.data}</span>
                </div>
            </div>
        </>
    )
}
export default Left;