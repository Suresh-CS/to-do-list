import React from 'react';

const ToDoList = (props) => {
   
    return (
        <>
            <li>
                <button id="btn2" onClick={ ()=>{
                 props.deleteitem(props.id);
                }}> - </button> 
                {props.itm}
            </li>
        </>
    );
}

export default ToDoList;