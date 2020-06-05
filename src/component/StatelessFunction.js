import React from 'react'

const StatelessFunction = props =>{
    return(
        <div>
            <h3>Hallo {props.name} </h3>
            {props.children}
            <h3>Umur Anda {props.umur} </h3>
        </div>
    );
}
export default StatelessFunction