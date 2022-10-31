import React from 'react';



const Navigation = (props) => {
  
   
    return (
        <>
            <div key={props.id}>
                <h2>{props.label}</h2>
                <ul></ul>
            </div>
        </>
    )

}


export default Navigation;