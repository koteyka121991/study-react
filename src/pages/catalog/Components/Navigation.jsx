import React from 'react';



const Navigation = (props) => {

    return (
        <>
            <span onClick={()=>(alert('HI'))}>{props.label}</span>
           
        </>
    )

}


export default Navigation;