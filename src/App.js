
import './App.css';
import React, { useState } from 'react';
import ToDoList from './ToDolist';

function App(props) {

  const [item, updateitem] = useState("");
  const [item1, updateitem1] = useState([]);//this indicate initial value given to var is null array
  

  const events = (obj) => {
    updateitem(obj.target.value);
  }

  const additem = (obj) => {
    updateitem1((olditem) => { //using operator for saving total value of item value at once in item1 array

        return [...olditem, item]

    });
    updateitem("");//this will make item value to empty whenever we add an item by click button
  }

  //item deleting function
  const remove = (id) =>{
    console.log("deleted");
    updateitem1((olditem) => { 
      return olditem.filter( (olditem,index)=>{ //it check which id is deleted and return filter array
        return index!==id;//it return index that is not equal to id than return that index array only
      } )
    });
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <span><h1>ToDo List</h1></span>
          <div className="inner_div">
            <input className="inp" type="text" placeholder="Add an item" onChange={events} value={item}></input>
            <button id="btn1" onClick={additem}> + </button>
          </div>
          <br /><br />
          <ul>
            {/* <li>{item1[0]}</li>
                <li>{item1[1]}</li>     instead of thi we can use map method for array*/

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

/*In above at first updateitem is setting updated input value to item and updateitem1 then get that updated
item value and send it to item1 which is then render in list*/