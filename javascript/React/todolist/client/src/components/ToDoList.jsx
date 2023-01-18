import React, { useState } from "react";

const ToDoList = () => {
  const [item, setItem] = useState("");
  let [listOfItems, setListOfItems] = useState([
    { item: "Eat", completed: false },
    { item: "Sleep", completed: false },
    { item: "Code", competed: false },
    { item: "Repeat", completed: false },
  ]);
  const deleteItem = (e, idx) => {
    let list = listOfItems.filter((item, i) => {
      return i !== idx;
    });
    setListOfItems([...list]);
  };
  const addItem = (e) => {
    e.preventDefault();
    let newItem = { item, completed: false };
    console.log("You added me!", newItem);
    setListOfItems([...listOfItems, newItem]);
  };

  const completeItem = () => {
    console.log("This check box is working");
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={addItem}>
        <input
          onChange={(e) => setItem(e.target.value)}
          type="text"
          placeholder="Add an item to list"
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <h1>List:</h1>

        {listOfItems.map((oneitem, idx) => {
          return (
            <div key={idx} className="row justify-content-center border">
              <div className="col-6 d-flex justify-content-end my-3">
                <h2>{oneitem.item}</h2>
                <div className="col-6 d-flex justify-content-evenly">
                  <input onClick={completeItem} type="checkbox" />
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) => deleteItem(e, idx)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;

// input type should be a checkbox that should be true or false
// create a conditional for check box to strike-through element when checked off list
// create a bucket for list objects
// add function will add object to bucket
// delete function will delete object from bucket using filter method and index of that object
// Starting list:
// ["Eat", "Sleep", "Code", "Repeat"]
