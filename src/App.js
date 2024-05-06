import './App.css';
import React, { useState } from 'react';
import ToDoList from './ToDolist';

function App(props) {

  const [item, updateitem] = useState("");
  const [item1, updateitem1] = useState([]);
  

  const events = (obj) => {
    updateitem(obj.target.value);
  }

  const additem = (obj) => {
    updateitem1((olditem) => {

        return [...olditem, item]

    });
    updateitem("");
  }

  const remove = (id) =>{
    console.log("deleted");
    updateitem1((olditem) => { 
      return olditem.filter( (olditem,index)=>{ 
        return index!==id;
      } )
    });
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <span><h1>To Do List</h1></span>
          <div className="inner_div">
            <input className="inp" type="text" placeholder="Add an item" onChange={events} value={item}></input>
            <button id="btn1" onClick={additem}> + </button>
          </div>
          <br /><br />
          <ul>
            {

              item1.map(function (itemvalue, index) {
                return (<ToDoList
                  itm={itemvalue}
                  key={index}
                  id={index}
                  deleteitem={remove}
                />)
              })
            }


          </ul>
        </div>
      </div>
    </>
  );
}

export default App;